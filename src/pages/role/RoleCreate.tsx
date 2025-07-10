import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength
} from 'react-admin';

const validateName = [required(), minLength(3)];

export const RoleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput 
        source="name" 
        label="Название роли"
        validate={validateName}
      />
    </SimpleForm>
  </Create>
); 