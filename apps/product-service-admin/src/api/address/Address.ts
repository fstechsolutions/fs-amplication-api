import { User } from "../user/User";

export type Address = {
  addressType?: "Billing" | "Delivery" | "Mailing" | null;
  city: string | null;
  createdAt: Date;
  id: string;
  postalCode: string | null;
  state: string | null;
  street: string;
  street2: string | null;
  updatedAt: Date;
  user?: User;
};
