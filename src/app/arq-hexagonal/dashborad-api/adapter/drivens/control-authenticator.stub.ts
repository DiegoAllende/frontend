import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
  token: "12345",
  refreshToken: "12345"
}

const permissionsMock: Permissions = {
  admin: true,
  user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailsMock);
  }
  getPermissions(email: string, password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}