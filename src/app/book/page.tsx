import type { Metadata } from "next";
import BookingWizard from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book a free eye test or consultation at any Jeff Patel Optometrist branch. 5 locations across Mauritius.",
};

export default function BookPage() {
  return <BookingWizard />;
}
