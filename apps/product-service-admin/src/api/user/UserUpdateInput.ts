import { AddressUpdateManyWithoutUsersInput } from "./AddressUpdateManyWithoutUsersInput";
import { ProductUpdateManyWithoutUsersInput } from "./ProductUpdateManyWithoutUsersInput";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  addresses?: AddressUpdateManyWithoutUsersInput;
  email?: string;
  favorites?: ProductUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  phone?: string | null;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
