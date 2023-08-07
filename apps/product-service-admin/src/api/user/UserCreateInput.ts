import { AddressCreateNestedManyWithoutUsersInput } from "./AddressCreateNestedManyWithoutUsersInput";
import { ProductCreateNestedManyWithoutUsersInput } from "./ProductCreateNestedManyWithoutUsersInput";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ProfileCreateNestedManyWithoutUsersInput } from "./ProfileCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  addresses?: AddressCreateNestedManyWithoutUsersInput;
  email: string;
  favorites?: ProductCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  phone?: string | null;
  profiles?: ProfileCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
