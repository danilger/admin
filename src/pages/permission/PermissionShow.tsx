import {
  Show,
  SimpleShowLayout,
  TextField,
  ArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';

export const PermissionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" label="Название" />
      <ArrayField source="roles" label="Используется в ролях">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
); 