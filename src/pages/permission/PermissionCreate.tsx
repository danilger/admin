import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength
} from 'react-admin';

const validateName = [required(), minLength(3)];

export const PermissionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput 
        source="name" 
        label="Название разрешения"
        validate={validateName}
        helperText="Например: can_read:users, can_write:posts"
      />
    </SimpleForm>
  </Create>
); 