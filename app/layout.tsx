// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: 'About Madhara Service Center | Our Story and Mission',
  description: 'Learn about Madhara Service Center, a leading name in Sri Lanka\'s staffing industry. Discover our story, vision, and our commitment to quality service.',
  openGraph: {
    title: 'About Madhara Service Center',
    description: 'Discover our story, vision, and commitment to quality service.',
    url: 'https://yourwebsite.com/about', 
    images: [
      {
        url: '/why-us.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}