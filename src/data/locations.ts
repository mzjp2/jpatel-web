import type { Location } from "@/types/location";

export const locations: Location[] = [
  {
    id: "quatre-bornes",
    name: "Quatre-Bornes",
    address: "Arcade Dookun, Saint Jean Road, Quatre-Bornes",
    phone: "+230 454 9000",
    email: "quatrebornes@jeffpatel.com",
    hours: [
      { day: "Monday", open: "09:00", close: "18:00" },
      { day: "Tuesday", open: "09:00", close: "18:00" },
      { day: "Wednesday", open: "09:00", close: "18:00" },
      { day: "Thursday", open: "09:00", close: "13:00" },
      { day: "Friday", open: "09:00", close: "18:00" },
      { day: "Saturday", open: "09:00", close: "16:00" },
      { day: "Sunday", open: "", close: "", closed: true },
    ],
    mapUrl: "https://maps.google.com/?q=Arcade+Dookun+Saint+Jean+Road+Quatre-Bornes+Mauritius",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.0!2d57.4897!3d-20.2650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzU0LjAiUyA1N8KwMjknMjIuOSJF!5e0!3m2!1sen!2smu!4v1",
    imageUrl:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
  },
  {
    id: "port-louis",
    name: "Port-Louis",
    address: "Newton Tower, Sir William Newton Street, Port-Louis",
    phone: "+230 211 6043",
    email: "portlouis@jeffpatel.com",
    hours: [
      { day: "Monday", open: "09:00", close: "16:30" },
      { day: "Tuesday", open: "09:00", close: "16:30" },
      { day: "Wednesday", open: "09:00", close: "16:30" },
      { day: "Thursday", open: "09:00", close: "16:30" },
      { day: "Friday", open: "09:00", close: "16:30" },
      { day: "Saturday", open: "09:00", close: "13:00" },
      { day: "Sunday", open: "", close: "", closed: true },
    ],
    mapUrl: "https://maps.google.com/?q=Newton+Tower+Sir+William+Newton+Street+Port+Louis+Mauritius",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0!2d57.4966!3d-20.1609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA5JzM5LjIiUyA1N8KwMjknNDcuOCJF!5e0!3m2!1sen!2smu!4v1",
    imageUrl:
      "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?w=800&q=80",
  },
  {
    id: "floreal",
    name: "Floreal",
    mall: "So'Flo Mall",
    address: "So'Flo Mall, Floreal",
    phone: "+230 606 3535",
    email: "floreal@jeffpatel.com",
    hours: [
      { day: "Monday", open: "09:30", close: "20:00" },
      { day: "Tuesday", open: "09:30", close: "20:00" },
      { day: "Wednesday", open: "09:30", close: "20:00" },
      { day: "Thursday", open: "09:30", close: "20:00" },
      { day: "Friday", open: "09:30", close: "20:30" },
      { day: "Saturday", open: "09:00", close: "21:30" },
      { day: "Sunday", open: "09:00", close: "14:00" },
    ],
    mapUrl: "https://maps.google.com/?q=SoFlo+Mall+Floreal+Mauritius",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.5!2d57.5030!3d-20.2410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE0JzI3LjYiUyA1N8KwMzAnMTAuOCJF!5e0!3m2!1sen!2smu!4v1",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
  },
  {
    id: "grand-baie",
    name: "Grand Baie",
    mall: "Grand Baie La Croisette",
    address: "Grand Baie La Croisette, Grand Baie",
    phone: "+230 269 6113",
    email: "grandbaie@jeffpatel.com",
    hours: [
      { day: "Monday", open: "09:30", close: "20:30" },
      { day: "Tuesday", open: "09:30", close: "20:30" },
      { day: "Wednesday", open: "09:30", close: "20:30" },
      { day: "Thursday", open: "09:30", close: "20:30" },
      { day: "Friday", open: "09:30", close: "21:30" },
      { day: "Saturday", open: "09:30", close: "21:30" },
      { day: "Sunday", open: "09:30", close: "20:30" },
    ],
    mapUrl: "https://maps.google.com/?q=Grand+Baie+La+Croisette+Grand+Baie+Mauritius",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.0!2d57.5820!3d-20.0030!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzEwLjgiUyA1N8KwMzQnNTUuMiJF!5e0!3m2!1sen!2smu!4v1",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "vacoas",
    name: "Vacoas",
    mall: "The Regent",
    address: "The Regent, Saint Paul Road, Vacoas",
    phone: "+230 469 4276",
    email: "vacoas@jeffpatel.com",
    hours: [
      { day: "Monday", open: "09:00", close: "17:30" },
      { day: "Tuesday", open: "09:00", close: "17:30" },
      { day: "Wednesday", open: "09:00", close: "17:30" },
      { day: "Thursday", open: "09:00", close: "13:00" },
      { day: "Friday", open: "09:00", close: "17:30" },
      { day: "Saturday", open: "09:00", close: "16:00" },
      { day: "Sunday", open: "", close: "", closed: true },
    ],
    mapUrl: "https://maps.google.com/?q=The+Regent+Saint+Paul+Road+Vacoas+Mauritius",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.3!2d57.4810!3d-20.3000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzU5LjIiUyA1N8KwMjgnNTEuNiJF!5e0!3m2!1sen!2smu!4v1",
    imageUrl:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
];
