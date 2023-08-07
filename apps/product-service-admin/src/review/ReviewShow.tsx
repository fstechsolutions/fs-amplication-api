import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
