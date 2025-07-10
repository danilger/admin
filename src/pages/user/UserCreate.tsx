import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  email,
  required,
  minLength
} from 'react-admin';

const validateUsername = [required(), minLength(3)];
const validateEmail = [required(), email()];
const validatePassword = [required(), minLength(6)];

export const UserCreate = () => (
  <Create>
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
      <PasswordInput 
        source="password" 
        label="Пароль"
        validate={validatePassword}
      />
    </SimpleForm>
  </Create>
); 