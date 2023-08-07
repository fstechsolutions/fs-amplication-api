import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  deliveryCharge?: number | null;
  discount?: string | null;
  notes?: string | null;
  products?: ProductUpdateManyWithoutOrdersInput;
  status?:
    | "Inprogress"
    | "Completed"
    | "Cancelled"
    | "Outfordelivery"
    | "Delivered";
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
