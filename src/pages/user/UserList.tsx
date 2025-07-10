import {
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  EditButton,
  DeleteButton,
  TextInput,
  SearchInput,
  FilterButton,
  CreateButton,
  TopToolbar
} from 'react-admin';

const userFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Имя пользователя" source="username" />,
  <TextInput label="Email" source="email" />
];

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
  </TopToolbar>
);

export const UserList = () => (
  <List 
    filters={userFilters}
    actions={<ListActions />}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" label="Имя пользователя" />
      <EmailField source="email" label="Email" />
      <BooleanField source="isActive" label="Активен" />
      <BooleanField source="isVerified" label="Подтвержден" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
); 