/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../../product/base/ProductListRelationFilter";
import { EnumOrderStatus } from "./EnumOrderStatus";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class OrderWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  discount?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProductListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProductListRelationFilter)
  @IsOptional()
  @Field(() => ProductListRelationFilter, {
    nullable: true,
  })
  products?: ProductListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?:
    | "Inprogress"
    | "Completed"
    | "Cancelled"
    | "Outfordelivery"
    | "Delivered";

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  total?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { OrderWhereInput as OrderWhereInput };
