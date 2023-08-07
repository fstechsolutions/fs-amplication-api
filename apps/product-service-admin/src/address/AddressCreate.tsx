import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
