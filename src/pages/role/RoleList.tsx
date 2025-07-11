import {
  ArrayField,
  ChipField,
  CreateButton,
  Datagrid,
  DeleteButton,
  EditButton,
  FilterButton,
  List,
  SearchInput,
  SingleFieldList,
  TextField,
  TextInput,
  TopToolbar
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