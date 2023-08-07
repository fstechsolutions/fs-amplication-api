import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  menuName?: SortOrder;
  name?: SortOrder;
  nutrients?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productType?: SortOrder;
  reviewsId?: SortOrder;
  sku?: SortOrder;
  slug?: SortOrder;
  stripeBuyNowLink?: SortOrder;
  stripeBuyNowLinkTestLink?: SortOrder;
  stripeProdId?: SortOrder;
  stripeTestId?: SortOrder;
  summary?: SortOrder;
  tags?: SortOrder;
  thumbnail?: SortOrder;
  updatedAt?: SortOrder;
  usersId?: SortOrder;
  variants?: SortOrder;
};
