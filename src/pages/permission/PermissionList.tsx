import {
  CreateButton,
  Datagrid,
  DeleteButton,
  EditButton,
  FilterButton,
  List,
  SearchInput,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

const permissionFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Название" source="name" />,
];

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
  </TopToolbar>
);

export const PermissionList = () => (
  <List
    filters={permissionFilters}
    actions={<ListActions />}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" label="Название" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
