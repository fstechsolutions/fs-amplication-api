import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="addressType"
          label="addressType"
          choices={[
            { label: "BILLING", value: "Billing" },
            { label: "DELIVERY", value: "Delivery" },
            { label: "MAILING", value: "Mailing" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="city" source="city" />
        <TextInput label="postalCode" source="postalCode" />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <TextInput label="street2" source="street2" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
