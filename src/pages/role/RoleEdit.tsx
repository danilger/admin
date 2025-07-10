import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  minLength,
  ReferenceArrayInput,
  SelectArrayInput
} from 'react-admin';

const validateName = [required(), minLength(3)];

export const RoleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput 
        source="name" 
        label="Название роли"
        validate={validateName}
      />
      <ReferenceArrayInput 
        source="permissions" 
        reference="permission" 
        label="Разрешения"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
); 