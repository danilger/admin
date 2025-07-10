// in src/admin/index.tsx
import { Admin, Resource } from "react-admin";
import permissionResource from "../pages/permission";
import roleResource from "../pages/role";
import userResource from "../pages/user";
import { authProvider } from "./api/authProvider";
import { dataProvider } from "./api/dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="user" {...userResource} />
    <Resource name="role" {...roleResource} />
    <Resource name="permission" {...permissionResource} />
  </Admin>
);

export default App;
