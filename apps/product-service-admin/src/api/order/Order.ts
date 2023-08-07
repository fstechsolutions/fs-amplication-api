import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  deliveryCharge: number | null;
  discount: string | null;
  id: string;
  notes: string | null;
  products?: Array<Product>;
  status?:
    | "Inprogress"
    | "Completed"
    | "Cancelled"
    | "Outfordelivery"
    | "Delivered";
  total: number | null;
  updatedAt: Date;
  user?: User | null;
};
