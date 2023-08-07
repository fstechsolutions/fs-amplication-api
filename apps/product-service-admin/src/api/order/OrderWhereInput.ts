import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  discount?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
  status?:
    | "Inprogress"
    | "Completed"
    | "Cancelled"
    | "Outfordelivery"
    | "Delivered";
  total?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
