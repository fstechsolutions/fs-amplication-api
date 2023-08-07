import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressUpdateInput = {
  addressType?: "Billing" | "Delivery" | "Mailing" | null;
  city?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string;
  street2?: string | null;
  user?: UserWhereUniqueInput;
};
