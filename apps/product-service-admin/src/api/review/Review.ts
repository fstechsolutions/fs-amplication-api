import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  fullReview: string;
  id: string;
  numStars: number;
  productName?: Product;
  summary: string;
  totalNumReviews: number | null;
  updatedAt: Date;
  user?: User | null;
  videoUrl: string | null;
};
