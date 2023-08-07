import { User } from "../user/User";

export type Profile = {
  avatar: string | null;
  city: string | null;
  createdAt: Date;
  id: string;
  publicDisplayName: string;
  publicUserInfo: string | null;
  state: string | null;
  updatedAt: Date;
  user?: User;
};
