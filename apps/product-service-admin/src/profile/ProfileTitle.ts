import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "publicDisplayName";

export const ProfileTitle = (record: TProfile): string => {
  return record.publicDisplayName || String(record.id);
};
