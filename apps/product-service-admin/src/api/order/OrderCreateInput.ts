import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  deliveryCharge?: number | null;
  discount?: string | null;
  notes?: string | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status:
    | "Inprogress"
    | "Completed"
    | "Cancelled"
    | "Outfordelivery"
    | "Delivered";
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
