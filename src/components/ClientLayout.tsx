"use client";

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Sidebar from './Sidebar';
import { assets } from '@/config/assets';
import type { ReactElement, ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps): ReactElement {
  const [isLoading, setIsLoading] = useState(false); // Start false to match server
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minDelayComplete, setMinDelayComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setHasMounted(true);
    setIsLoading(true); // Start loading after hydration
  }, []);

  // Preload all images from assets - only after mounting
  useEffect(() => {
    if (!hasMounted) return;
    
    const preloadImages = async () => {
      const imagesToLoad = [
        // Logo
        assets.logo.src,
        // Hero slides
        ...assets.hero.slides.map(slide => slide.src),
        // Gallery images
        ...assets.gallery.images.map(img => img.src),
        // Section images
        assets.sections.centerpiece.background,
        assets.sections.centerpiece.image,
        // Common images
        '/images/pizza.png', // Contact form decoration
      ];

      const totalImages = imagesToLoad.length;
      let loadedImages = 0;

      const imagePromises = imagesToLoad.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedImages++;
            setLoadingProgress((loadedImages / totalImages) * 100);
            resolve(src);
          };
          img.onerror = () => {
            loadedImages++;
            setLoadingProgress((loadedImages / totalImages) * 100);
            resolve(src); // Continue even if some images fail
          };
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.warn('Some images failed to load:', error);
        setImagesLoaded(true); // Continue anyway
      }
    };

    preloadImages();
  }, [hasMounted]);

  // 4-second minimum delay - only after mounting
  useEffect(() => {
    if (!hasMounted) return;
    
    const timer = setTimeout(() => {
      setMinDelayComplete(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [hasMounted]);

  // Hide loading screen when both conditions are met
  useEffect(() => {
    if (imagesLoaded && minDelayComplete) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay for smooth transition

      return () => clearTimeout(timer);
    }
  }, [imagesLoaded, minDelayComplete]);

  // Show loading screen only after hydration
  if (hasMounted && isLoading) {
    return (
      <LoadingScreen 
        onLoadingComplete={() => setIsLoading(false)}
        duration={4000}
        imagesLoaded={imagesLoaded}
        minDelayComplete={minDelayComplete}
        loadingProgress={loadingProgress}
      />
    );
  }

  return (
    <div className="md:pl-[200px]">
      <Sidebar />
      <main id="contenu" className="min-h-screen">
        {children}
      </main>
    </div>
  );
}