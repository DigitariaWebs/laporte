import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu Enfants PDF',
};

export default function Page() {
  return (
    <main className="min-h-[80vh] p-4">
      <div className="mx-auto w-full max-w-6xl">
        <iframe
          src="/Menuenfant.pdf"
          title="Menu enfants"
          className="h-[80vh] w-full border-0"
        />
      </div>
    </main>
  );
}


