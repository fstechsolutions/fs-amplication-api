import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  addresses?: AddressListRelationFilter;
  email?: StringFilter;
  favorites?: ProductListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  reviews?: ReviewListRelationFilter;
  username?: StringFilter;
};
