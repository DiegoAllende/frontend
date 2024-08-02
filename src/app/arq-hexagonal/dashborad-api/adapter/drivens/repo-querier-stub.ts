import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
  id: "1",
  name: "diego",
  email: "diego@gmail.com"
}

export class RepoQuerierStub implements ForRepoQuerying {
  getUser(enail: string): Promise<RepoUser> {
    return Promise.resolve(userMock); 
  }
  createUser(user: User, password: string): Promise<RepoUser> {
    return Promise.resolve(userMock);
  }

}