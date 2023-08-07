import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";
import { ReviewTitle } from "../review/ReviewTitle";
import { UserTitle } from "../user/UserTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="menuName" source="menuName" />
        <TextInput label="name" source="name" />
        <TextInput label="nutrients" multiline source="nutrients" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <TextInput label="productType" source="productType" />
        <ReferenceInput source="reviews.id" reference="Review" label="Reviews">
          <SelectInput optionText={ReviewTitle} />
        </ReferenceInput>
        <TextInput label="sku" source="sku" />
        <TextInput label="slug" source="slug" />
        <TextInput label="stripeBuyNowLink" source="stripeBuyNowLink" />
        <TextInput
          label="stripeBuyNowLinkTestLink"
          source="stripeBuyNowLinkTestLink"
        />
        <TextInput label="stripeProdID" source="stripeProdId" />
        <TextInput label="stripeTestID" source="stripeTestId" />
        <TextInput label="summary" source="summary" />
        <TextInput label="tags" source="tags" />
        <TextInput label="thumbnail" source="thumbnail" />
        <ReferenceInput source="users.id" reference="User" label="Users">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
