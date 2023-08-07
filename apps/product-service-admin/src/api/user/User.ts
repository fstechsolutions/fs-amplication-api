import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { Order } from "../order/Order";
import { Profile } from "../profile/Profile";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  addresses?: Array<Address>;
  createdAt: Date;
  email: string;
  favorites?: Array<Product>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  profiles?: Array<Profile>;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
