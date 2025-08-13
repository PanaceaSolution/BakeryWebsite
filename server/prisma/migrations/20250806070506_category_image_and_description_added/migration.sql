/*
  Warnings:

  - Added the required column `categoryImage` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" ADD COLUMN     "categoryImage" TEXT NOT NULL,
ADD COLUMN     "description" JSONB NOT NULL;
