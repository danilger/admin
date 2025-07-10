import PeopleIcon from "@mui/icons-material/People";
import { ListGuesser } from "react-admin";
import { UserCreate } from "./UserCreate";
import { UserEdit } from "./UserEdit";
import { UserShow } from "./UserShow";

export default {
  icon: PeopleIcon,
  list: ListGuesser,
  create: UserCreate,
  edit: UserEdit,
  show: UserShow,
};
