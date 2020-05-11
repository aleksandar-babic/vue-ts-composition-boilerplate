import BaseApiService from "@/services/api/base.api-service";

import { User } from "@/models/user.model";
import { RegisterUserRequest } from "@/dto/user/registerUserRequest.dto";
import { LoginUserRequest } from "@/dto/user/loginUserRequest.dto";

type AuthApiEndpoints = {
  login: string;
  register: string;
  users: string;
};

class AuthApiService extends BaseApiService {
  readonly authApiUrlSuffix: string = "auth";
  private endpoints: AuthApiEndpoints;

  constructor() {
    super();

    this.endpoints = {
      login: "auth/login",
      register: "auth/register",
      // Only users endpoint is implemented, using jsonplaceholder
      users: "users"
    };
  }

  login(user: LoginUserRequest) {
    return this.post<User>(this.endpoints.login, user);
  }

  register(user: RegisterUserRequest) {
    return this.post<User>(this.endpoints.register, user);
  }

  getUser(userId: number) {
    return this.get<User>(`${this.endpoints.users}/${userId}`);
  }

  getUsers() {
    return this.get<Array<User>>(this.endpoints.users);
  }
}

export const authApiService = new AuthApiService();
