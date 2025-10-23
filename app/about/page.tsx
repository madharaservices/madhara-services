// app/about/page.tsx
import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent'; // අපි හදපු content එක
import Navbar from '../components/Navbar'; // Header එක import කරනවා
import Footer from '../components/Footer'; // Footer එක import කරනවා

// SEO සහ OpenGraph metadata මෙතන තියෙන්නේ
// (මේක server component එකක් නිසා මෙතන metadata තියෙන්න පුළුවන්)
export const metadata: Metadata = {
  title: 'About Madhara Services | Our Story and Mission',
  description: 'Learn about Madhara Services, our mission of care, comfort, safety, and our vision to be the most trusted provider.',
  openGraph: {
    title: 'About Madhara Services | Care, Comfort, Safety',
    description: 'Discover our story, vision, and commitment to quality service.',
    images: [
      {
        url: '/why-us.jpg', 
        width: 1200,
        height: 630,
      },
    ],
  },
};

// ප්‍රධාන page component එක
export default function AboutPage() {
  return (
    // Home page (app/page.tsx) එකේ වගේම <main> tag එකක් දානවා
    <main className="overflow-x-hidden">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </main>
  );
}