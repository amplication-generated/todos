import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  roles: InputJsonValue;
  username: string;
};
