import './globals.css';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-white dark:bg-black">
          <main className="min-h-screen overflow-hidden text-black dark:text-white">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
