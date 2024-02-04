declare type UserPublicData = {
  id: number;
  name: string;
  email: string;
  is_blocked: boolean;
  role_id: number;
};

declare type ValidateLogin = {
  email: string;
  password: string;
};
