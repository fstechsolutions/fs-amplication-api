import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="deliveryCharge" source="deliveryCharge" />
        <TextInput label="discount" source="discount" />
        <TextInput label="notes" multiline source="notes" />
        <ReferenceArrayInput
          source="products"
          reference="Product"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "INPROGRESS", value: "Inprogress" },
            { label: "COMPLETED", value: "Completed" },
            { label: "CANCELLED", value: "Cancelled" },
            { label: "OUTFORDELIVERY", value: "Outfordelivery" },
            { label: "DELIVERED", value: "Delivered" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="total" source="total" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
