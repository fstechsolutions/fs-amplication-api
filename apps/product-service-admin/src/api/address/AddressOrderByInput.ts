import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  addressType?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  street2?: SortOrder;
  updatedAt?: SortOrder;
  ID?: SortOrder;
};
