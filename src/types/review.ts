export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  locationId?: string;
  source: "google";
}
