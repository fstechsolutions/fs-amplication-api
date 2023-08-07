import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileWhereInput = {
  avatar?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  publicDisplayName?: StringFilter;
  state?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
