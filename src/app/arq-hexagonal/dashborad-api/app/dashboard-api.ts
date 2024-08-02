import { ControlAuthenticatorStub } from "../adapter/drivens";
import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { ForAuthenticating } from "../ports/drivers";
import { AuthenticatedUser, User } from "./schemas";

export class DashboardApi implements ForAuthenticating {
  constructor(
    private readonly forControlAuthenticating: ForControlAuthenticating,
    private readonly forRepoQuerying: ForRepoQuerying,
  ) { }

  async login(email: string, password: string): Promise<AuthenticatedUser> {
    const autDetails = await this.forControlAuthenticating.getAuthDetails(email, password);
    const permissions = await this.forControlAuthenticating.getPermissions(email, password);
    const user = await this.forRepoQuerying.getUser(email);
    return {
      ...user,
      ...autDetails,
      ...permissions
    }
  };

  async register(user: User): Promise<AuthenticatedUser> {
    const newUser = await this.forRepoQuerying.createUser(user, user.password);
    const autDetails = await this.forControlAuthenticating.getAuthDetails(user.email, user.password);
    const permissions = await this.forControlAuthenticating.getPermissions(user.email, user.password);
    return {
      ...newUser,
      ...autDetails,
      ...permissions
    }
  };
}