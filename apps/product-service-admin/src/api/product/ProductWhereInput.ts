import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  menuName?: StringNullableFilter;
  name?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatFilter;
  productType?: StringFilter;
  reviews?: ReviewWhereUniqueInput;
  sku?: StringNullableFilter;
  slug?: StringFilter;
  stripeBuyNowLink?: StringNullableFilter;
  stripeBuyNowLinkTestLink?: StringNullableFilter;
  stripeProdId?: StringNullableFilter;
  stripeTestId?: StringNullableFilter;
  summary?: StringNullableFilter;
  tags?: StringNullableFilter;
  users?: UserWhereUniqueInput;
  variants?: JsonFilter;
};
