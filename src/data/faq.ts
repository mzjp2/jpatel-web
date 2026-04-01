export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "eye-tests" | "contact-lenses" | "frames" | "delivery";
}

export const faqItems: FaqItem[] = [
  // General
  {
    id: "f001",
    category: "general",
    question: "How do I book an eye test appointment?",
    answer:
      "You can book online through our website using the 'Book Appointment' button, or call your nearest branch directly. We recommend booking in advance, especially for evenings and Saturdays.",
  },
  {
    id: "f002",
    category: "general",
    question: "Do I need a referral to visit an optometrist?",
    answer:
      "No referral is needed. Simply book an appointment at your nearest branch and our optometrists will take care of everything from routine check-ups to specialist referrals if required.",
  },
  {
    id: "f003",
    category: "general",
    question: "How often should I have my eyes tested?",
    answer:
      "Adults should have a comprehensive eye exam every 2 years. If you wear glasses or contact lenses, or have a family history of eye disease, we recommend annual check-ups. Children should have their eyes tested before starting school and every year after that.",
  },
  {
    id: "f004",
    category: "general",
    question: "What should I bring to my appointment?",
    answer:
      "Please bring your current glasses or contact lenses if you have them, any previous prescriptions, your national ID card, and a list of any medications you are taking. If you have been referred by another doctor, please bring that letter too.",
  },
  {
    id: "f005",
    category: "general",
    question: "Do you accept health insurance?",
    answer:
      "Yes, we work with most major Mauritian insurance providers. Please bring your insurance card and policy details to your appointment. We will process the claim on your behalf where possible.",
  },
  // Eye Tests
  {
    id: "f006",
    category: "eye-tests",
    question: "What does a comprehensive eye examination include?",
    answer:
      "Our comprehensive eye exam includes visual acuity testing, refraction assessment for glasses/contact lens prescriptions, eye pressure measurement (glaucoma screening), retinal examination using our retinal camera (100x magnification), colour vision testing, and binocular vision assessment. The full exam takes approximately 45 minutes.",
  },
  {
    id: "f007",
    category: "eye-tests",
    question: "What is a retinal camera examination?",
    answer:
      "Our retinal camera captures detailed photographs of the back of your eye (the retina) at 100x magnification. This allows our optometrists to screen for conditions including glaucoma, macular degeneration, diabetic retinopathy, and hypertensive changes — often before any symptoms appear. It is one of the most important preventive health checks available.",
  },
  {
    id: "f008",
    category: "eye-tests",
    question: "Are eye tests suitable for children?",
    answer:
      "Absolutely. We recommend children have their first eye test before starting school, and annually thereafter. Our optometrists are experienced at working with children of all ages, making the experience relaxed and fun. Early detection of conditions like amblyopia (lazy eye) is crucial for effective treatment.",
  },
  {
    id: "f009",
    category: "eye-tests",
    question: "How long does an eye test take?",
    answer:
      "A standard eye test takes approximately 30 minutes. A comprehensive examination including retinal photography takes 45–60 minutes. If this is your first visit or you have complex requirements, please allow an hour.",
  },
  // Contact Lenses
  {
    id: "f010",
    category: "contact-lenses",
    question: "Can anyone wear contact lenses?",
    answer:
      "Most people with a glasses prescription can wear contact lenses, including those with astigmatism or presbyopia. Our optometrists will assess your suitability during a contact lens fitting appointment and recommend the most appropriate type for your eyes and lifestyle.",
  },
  {
    id: "f011",
    category: "contact-lenses",
    question: "What is the difference between daily, bi-weekly and monthly lenses?",
    answer:
      "Daily lenses are discarded after each use — no cleaning required, ideal for occasional wear or people with allergies. Bi-weekly lenses are replaced every 2 weeks with nightly cleaning. Monthly lenses are replaced every 30 days and require daily cleaning and storage in solution. Our optometrist will help you choose based on your lifestyle and prescription needs.",
  },
  {
    id: "f012",
    category: "contact-lenses",
    question: "Do you offer contact lenses for astigmatism?",
    answer:
      "Yes, we stock a wide range of toric contact lenses specifically designed for astigmatism from leading brands including CooperVision, Johnson & Johnson, and Alcon. If your power is not in stock, we can place a custom order for you.",
  },
  {
    id: "f013",
    category: "contact-lenses",
    question: "Can I order contact lenses online if I have a valid prescription?",
    answer:
      "Yes. You can order through our online shop using your current valid prescription. If your prescription is older than 12 months, we recommend booking a contact lens check-up first to ensure your eyes have not changed.",
  },
  // Frames
  {
    id: "f014",
    category: "frames",
    question: "Do you offer progressive (varifocal) lenses?",
    answer:
      "Yes, we offer a full range of progressive lenses from entry-level to premium digital freeform designs. Our opticians will help you choose the right progressive lens based on your prescription strength, lifestyle, and frame choice. Premium progressives offer a wider clear zone and a shorter adaptation period.",
  },
  {
    id: "f015",
    category: "frames",
    question: "How long does it take to make glasses?",
    answer:
      "Standard single-vision glasses are usually ready within 3–5 working days. Progressive/varifocal lenses take 5–7 working days. Complex prescriptions or specialist lenses may take longer. We will notify you by SMS when your glasses are ready.",
  },
  {
    id: "f016",
    category: "frames",
    question: "Do you offer free frame repairs?",
    answer:
      "Yes! We offer complimentary minor repairs while you wait, including screw tightening, nose pad replacement, and temple adjustments. For more significant damage such as broken hinges or snapped frames, we will assess and advise on repair or replacement options.",
  },
  {
    id: "f017",
    category: "frames",
    question: "Can I get my lenses replaced in my existing frame?",
    answer:
      "In most cases, yes. Bring your frame into any of our branches and we will assess whether it is suitable for new lenses. Frames that are in good condition and have appropriate lens fittings can be re-glazed, often at a lower cost than buying a new frame.",
  },
  // Delivery
  {
    id: "f018",
    category: "delivery",
    question: "Do you offer home delivery?",
    answer:
      "Yes, we deliver across Mauritius for a flat fee of Rs 150. Delivery typically takes 2–3 working days after your order is confirmed and ready. You will receive an SMS notification when your order is dispatched.",
  },
  {
    id: "f019",
    category: "delivery",
    question: "Can I collect my order in-store?",
    answer:
      "Absolutely — in-store collection is free. Simply choose your preferred branch at checkout and we will notify you when your order is ready for pick-up. You can also reserve an item online to try in-store before purchasing.",
  },
  {
    id: "f020",
    category: "delivery",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major debit and credit cards (Visa, Mastercard), cash, and online payments through the Blink payment portal. Bank transfers can be arranged for larger orders.",
  },
];
