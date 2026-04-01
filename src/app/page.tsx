import HeroSection from "@/components/home/HeroSection";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import PromoSection from "@/components/home/PromoSection";
import TestimonialsTeaser from "@/components/home/TestimonialsTeaser";
import BookingCTA from "@/components/home/BookingCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesTeaser />
      <PromoSection />
      <TestimonialsTeaser />
      <BookingCTA />
    </>
  );
}
