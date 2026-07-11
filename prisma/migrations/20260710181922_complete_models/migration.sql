-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_ownerId_fkey";

-- DropIndex
DROP INDEX "Booking_serviceId_idx";

-- DropIndex
DROP INDEX "Booking_status_idx";

-- DropIndex
DROP INDEX "Service_ownerId_idx";

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
