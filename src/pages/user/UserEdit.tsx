import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  email,
  required,
  minLength
} from 'react-admin';

const validateUsername = [required(), minLength(3)];
const validateEmail = [required(), email()];

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput 
        source="username" 
        label="Имя пользователя"
        validate={validateUsername}
      />
      <TextInput 
        source="email" 
        label="Email"
        validate={validateEmail}
      />
      <BooleanInput source="isActive" label="Активен" />
      <BooleanInput source="isVerified" label="Подтвержден" />
    </SimpleForm>
  </Edit>
); 