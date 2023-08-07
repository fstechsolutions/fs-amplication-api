import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  fullReview?: string;
  numStars?: number;
  productName?: ProductWhereUniqueInput;
  summary?: string;
  totalNumReviews?: number | null;
  user?: UserWhereUniqueInput | null;
  videoUrl?: string | null;
};
