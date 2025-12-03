export interface Booking {
  eventId: number;
  ownerName: string;
  phoneNumber: string;
  email: string;
  location: string;
  address: string;
  additionalNotes?: string; // optional
}
