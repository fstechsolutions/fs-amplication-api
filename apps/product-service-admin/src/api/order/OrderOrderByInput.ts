import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  deliveryCharge?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  status?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
