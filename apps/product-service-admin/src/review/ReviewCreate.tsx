import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fullReview" multiline source="fullReview" />
        <NumberInput step={1} label="numStars" source="numStars" />
        <ReferenceInput
          source="productName.id"
          reference="Product"
          label="productName"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <TextInput label="summary" source="summary" />
        <NumberInput
          step={1}
          label="totalNumReviews"
          source="totalNumReviews"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="videoUrl" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
