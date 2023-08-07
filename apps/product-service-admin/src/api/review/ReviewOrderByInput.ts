import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  fullReview?: SortOrder;
  id?: SortOrder;
  numStars?: SortOrder;
  name?: SortOrder;
  summary?: SortOrder;
  totalNumReviews?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  videoUrl?: SortOrder;
};
