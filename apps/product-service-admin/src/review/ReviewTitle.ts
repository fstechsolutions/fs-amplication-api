import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "productName";

export const ReviewTitle = (record: TReview): string => {
  return String(record.productName) || String(record.id);
};
