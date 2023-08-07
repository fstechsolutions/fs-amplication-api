import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORDER_TITLE_FIELD } from "./OrderTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryCharge" source="deliveryCharge" />
        <TextField label="discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <TextField label="status" source="status" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Product"
          target="orderId"
          label="Products"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="images" source="images" />
            <TextField label="menuName" source="menuName" />
            <TextField label="name" source="name" />
            <TextField label="nutrients" source="nutrients" />
            <ReferenceField label="Order" source="order.id" reference="Order">
              <TextField source={ORDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="price" source="price" />
            <TextField label="productType" source="productType" />
            <ReferenceField
              label="Reviews"
              source="review.id"
              reference="Review"
            >
              <TextField source={REVIEW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sku" source="sku" />
            <TextField label="slug" source="slug" />
            <TextField label="stripeBuyNowLink" source="stripeBuyNowLink" />
            <TextField
              label="stripeBuyNowLinkTestLink"
              source="stripeBuyNowLinkTestLink"
            />
            <TextField label="stripeProdID" source="stripeProdId" />
            <TextField label="stripeTestID" source="stripeTestId" />
            <TextField label="summary" source="summary" />
            <TextField label="tags" source="tags" />
            <TextField label="thumbnail" source="thumbnail" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Users" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="variants" source="variants" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
