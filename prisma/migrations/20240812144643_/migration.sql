/*
  Warnings:

  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Meme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MemeTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Save` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TemplateTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_memeId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meme" DROP CONSTRAINT "Meme_templateId_fkey";

-- DropForeignKey
ALTER TABLE "Meme" DROP CONSTRAINT "Meme_userId_fkey";

-- DropForeignKey
ALTER TABLE "MemeTag" DROP CONSTRAINT "MemeTag_memeId_fkey";

-- DropForeignKey
ALTER TABLE "MemeTag" DROP CONSTRAINT "MemeTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Save" DROP CONSTRAINT "Save_memeId_fkey";

-- DropForeignKey
ALTER TABLE "Save" DROP CONSTRAINT "Save_userId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateTag" DROP CONSTRAINT "TemplateTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "TemplateTag" DROP CONSTRAINT "TemplateTag_templateId_fkey";

-- DropTable
DROP TABLE "Like";

-- DropTable
DROP TABLE "Meme";

-- DropTable
DROP TABLE "MemeTag";

-- DropTable
DROP TABLE "Save";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "Template";

-- DropTable
DROP TABLE "TemplateTag";
