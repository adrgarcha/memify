/*
  Warnings:

  - The `tier` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Tier" AS ENUM ('FREE', 'SHITPOSTER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tier",
ADD COLUMN     "tier" "Tier" NOT NULL DEFAULT 'FREE';
