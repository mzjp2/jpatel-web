export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  mall?: string;
  phone: string;
  email?: string;
  hours: BusinessHours[];
  mapUrl: string;
  mapEmbedUrl?: string;
  imageUrl: string;
}
