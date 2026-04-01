import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Jeff Patel Optometrist services and online shop.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold uppercase text-white">Terms & Conditions</h1>
          <p className="mt-3 text-white/50 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-a:text-brand-primary">
            <p>
              Please read these Terms and Conditions carefully before using the Jeff Patel Optometrist website or purchasing our products and services. By accessing our website or making a purchase, you agree to be bound by these terms.
            </p>

            <h2>1. About Us</h2>
            <p>
              Jeff Patel Optometrist operates five branches across Mauritius. Our registered business address is Arcade Dookun, Saint Jean Road, Quatre-Bornes, Mauritius. References to &quot;Jeff Patel Optometrist&quot;, &quot;we&quot;, &quot;us&quot; and &quot;our&quot; refer to this business.
            </p>

            <h2>2. Products and Services</h2>
            <p>
              We offer optometry services, prescription eyewear, contact lenses, sunglasses, and accessories. All products are subject to availability. We reserve the right to discontinue any product at any time.
            </p>
            <p>
              Prescriptions: Optical products requiring a prescription will only be dispensed against a valid, current prescription issued by a registered optometrist or ophthalmologist. We reserve the right to request verification of your prescription.
            </p>

            <h2>3. Online Shop</h2>
            <h3>Ordering</h3>
            <p>
              By placing an order, you confirm that you are at least 18 years of age or have the consent of a parent or guardian. All orders are subject to acceptance and availability. We will confirm your order by email.
            </p>
            <h3>Pricing</h3>
            <p>
              All prices are quoted in Mauritian Rupees (MUR) and are inclusive of applicable taxes. Prices may change without notice. The price applicable to your order is the price displayed at the time you place the order.
            </p>
            <h3>Payment</h3>
            <p>
              Payment is processed securely through the Blink payment portal. We accept Visa, Mastercard and other supported payment methods. We do not store your full payment card details.
            </p>

            <h2>4. Delivery and Collection</h2>
            <ul>
              <li>
                <strong>Home Delivery:</strong> Available across Mauritius for a flat fee of Rs 150. Delivery typically takes 2–3 working days after your order is confirmed as ready.
              </li>
              <li>
                <strong>In-Store Collection:</strong> Free. You will be notified by SMS when your order is ready for collection at your chosen branch.
              </li>
              <li>
                <strong>In-Store Reservation:</strong> Items reserved online are held for 3 days. After this period, the reservation automatically expires and the item is returned to stock.
              </li>
            </ul>

            <h2>5. Returns and Refunds</h2>
            <p>
              Prescription eyewear: We will remake or refund prescription lenses free of charge if there is a manufacturing defect or if the lenses do not match the supplied prescription. Remakes or refunds requested due to a change in personal preference are at our discretion.
            </p>
            <p>
              Non-prescription products: Unused, unopened products in their original condition may be returned within 14 days of purchase for a full refund. Contact lenses in opened packaging cannot be returned for hygiene reasons unless defective.
            </p>
            <p>
              To initiate a return, please contact your nearest branch or email us at returns@jeffpatel.com.
            </p>

            <h2>6. Appointments</h2>
            <p>
              We ask that you give at least 24 hours notice if you need to cancel or reschedule an appointment. Repeated no-shows may result in a cancellation fee or requirement to pay a deposit for future bookings.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos and graphics, is the property of Jeff Patel Optometrist and is protected by copyright law. You may not reproduce, distribute or create derivative works without our express written permission.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Jeff Patel Optometrist shall not be liable for any indirect, incidental, special or consequential damages arising from your use of our website or services. Our total liability in any matter is limited to the amount you paid for the relevant product or service.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of Mauritius. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.
            </p>

            <h2>10. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
              <br />
              <strong>Jeff Patel Optometrist</strong>
              <br />
              Arcade Dookun, Saint Jean Road, Quatre-Bornes, Mauritius
              <br />
              Email: info@jeffpatel.com
              <br />
              Tel: +230 454 9000
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
