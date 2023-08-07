import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phone" source="phone" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Address" target="ID" label="Addresses">
          <Datagrid rowClick="show">
            <TextField label="addressType" source="addressType" />
            <TextField label="city" source="city" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="postalCode" source="postalCode" />
            <TextField label="state" source="state" />
            <TextField label="street" source="street" />
            <TextField label="street2" source="street2" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Product"
          target="usersId"
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
        <ReferenceManyField reference="Order" target="userId" label="Orders">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Profile"
          target="userId"
          label="Profiles"
        >
          <Datagrid rowClick="show">
            <TextField label="avatar" source="avatar" />
            <TextField label="city" source="city" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="publicDisplayName" source="publicDisplayName" />
            <TextField label="publicUserInfo" source="publicUserInfo" />
            <TextField label="state" source="state" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Review" target="userId" label="Reviews">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fullReview" source="fullReview" />
            <TextField label="ID" source="id" />
            <TextField label="numStars" source="numStars" />
            <ReferenceField
              label="productName"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="summary" source="summary" />
            <TextField label="totalNumReviews" source="totalNumReviews" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="videoUrl" source="videoUrl" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
