import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  images?: InputJsonValue;
  menuName?: string | null;
  name: string;
  nutrients?: string | null;
  order?: OrderWhereUniqueInput | null;
  price: number;
  productType: string;
  reviews?: ReviewWhereUniqueInput | null;
  sku?: string | null;
  slug: string;
  stripeBuyNowLink?: string | null;
  stripeBuyNowLinkTestLink?: string | null;
  stripeProdId?: string | null;
  stripeTestId?: string | null;
  summary?: string | null;
  tags?: string | null;
  thumbnail?: string | null;
  users?: UserWhereUniqueInput | null;
  variants?: InputJsonValue;
};
