import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "menuName";

export const ProductTitle = (record: TProduct): string => {
  return record.menuName || String(record.id);
};
