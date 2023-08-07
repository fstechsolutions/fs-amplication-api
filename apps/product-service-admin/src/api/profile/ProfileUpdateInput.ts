import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  avatar?: string | null;
  city?: string | null;
  publicDisplayName?: string;
  publicUserInfo?: string | null;
  state?: string | null;
  user?: UserWhereUniqueInput;
};
