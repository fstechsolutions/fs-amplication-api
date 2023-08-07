-- CreateEnum
CREATE TYPE "EnumOrderStatus" AS ENUM ('Inprogress', 'Completed', 'Cancelled', 'Outfordelivery', 'Delivered');

-- CreateEnum
CREATE TYPE "EnumAddressAddressType" AS ENUM ('Billing', 'Delivery', 'Mailing');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "images" JSONB,
    "menuName" TEXT,
    "name" TEXT NOT NULL,
    "nutrients" TEXT,
    "orderId" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "productType" TEXT NOT NULL,
    "sku" TEXT,
    "slug" TEXT NOT NULL,
    "stripeBuyNowLink" TEXT,
    "stripeBuyNowLinkTestLink" TEXT,
    "stripeProdId" TEXT,
    "stripeTestId" TEXT,
    "summary" TEXT,
    "tags" TEXT,
    "thumbnail" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,
    "variants" JSONB,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullReview" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "numStars" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "totalNumReviews" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "videoUrl" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "avatar" TEXT,
    "city" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "publicDisplayName" TEXT NOT NULL,
    "publicUserInfo" TEXT,
    "state" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryCharge" DOUBLE PRECISION,
    "discount" TEXT,
    "id" TEXT NOT NULL,
    "notes" TEXT,
    "status" "EnumOrderStatus" NOT NULL,
    "total" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "addressType" "EnumAddressAddressType",
    "city" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "postalCode" TEXT,
    "state" TEXT,
    "street" TEXT NOT NULL,
    "street2" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ID" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_stripeBuyNowLink_key" ON "Product"("stripeBuyNowLink");

-- CreateIndex
CREATE UNIQUE INDEX "Product_stripeProdId_key" ON "Product"("stripeProdId");

-- CreateIndex
CREATE UNIQUE INDEX "Product_stripeTestId_key" ON "Product"("stripeTestId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_name_key" ON "Review"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_ID_key" ON "Address"("ID");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_name_fkey" FOREIGN KEY ("name") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_ID_fkey" FOREIGN KEY ("ID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
