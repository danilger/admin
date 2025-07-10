import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  TextInput,
  SearchInput,
  FilterButton,
  CreateButton,
  TopToolbar,
  ArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';

const roleFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="Название" source="name" />
];

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
  </TopToolbar>
);

export const RoleList = () => (
  <List 
    filters={roleFilters}
    actions={<ListActions />}
  >
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" label="Название" />
      <ArrayField source="permissions" label="Разрешения">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
); 