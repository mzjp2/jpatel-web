export type BookingReason =
  | "eye-test"
  | "frame-selection"
  | "contact-lens-fitting"
  | "collection"
  | "other";

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormData {
  locationId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  reason: BookingReason;
  notes?: string;
  agreeToPrivacy: boolean;
}
