-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Description" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
