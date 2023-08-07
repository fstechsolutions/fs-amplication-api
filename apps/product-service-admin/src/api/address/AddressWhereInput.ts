import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AddressWhereInput = {
  addressType?: "Billing" | "Delivery" | "Mailing";
  city?: StringNullableFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringFilter;
  street2?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
