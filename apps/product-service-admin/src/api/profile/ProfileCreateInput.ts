import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  avatar?: string | null;
  city?: string | null;
  publicDisplayName: string;
  publicUserInfo?: string | null;
  state?: string | null;
  user: UserWhereUniqueInput;
};
