import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';

export const RoleShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Название" />
      <ArrayField source="permissions" label="Разрешения">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
); 