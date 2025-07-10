import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  BooleanField,
  ArrayField,
  SingleFieldList,
  ChipField
} from 'react-admin';

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" label="Имя пользователя" />
      <EmailField source="email" label="Email" />
      <BooleanField source="isActive" label="Активен" />
      <BooleanField source="isVerified" label="Подтвержден" />
      <ArrayField source="roles" label="Роли">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
); 