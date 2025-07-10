import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  minLength
} from 'react-admin';

const validateName = [required(), minLength(3)];

export const PermissionEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput 
        source="name" 
        label="Название разрешения"
        validate={validateName}
        helperText="Например: can_read:users, can_write:posts"
      />
    </SimpleForm>
  </Edit>
); 