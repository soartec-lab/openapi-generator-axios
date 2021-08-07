import { UsersApi } from "./repositories/gateways/users-api"

(async () => {
  const usersApi = new UsersApi();
  const apiResponse = await usersApi.getUser();
  const user = apiResponse.data;

  alert(user);
})();