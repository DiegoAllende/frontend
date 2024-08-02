import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapter/drivens";
import { AuthenticatorProxyAdapter } from "../adapter/drivers";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {
  const controlAuthenticatorStub = new ControlAuthenticatorStub();
  const repoQuerierStub = new RepoQuerierStub();
  const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);

  const auThenticatorProxyAdapter = new AuthenticatorProxyAdapter(
    dashboardApiMock
  );

  return {
    auThenticatorProxyAdapter
  }
}

export const {auThenticatorProxyAdapter} = compositionMock();



