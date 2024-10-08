import CountryFlagAndName from "@/components/card/CountryFlagAndName";
import { IconButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import EmptyList from "@/components/home/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteBookingAction, fetchBookings } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
import Link from "next/link";

async function BookingsPage() {
  const bookings = await fetchBookings();
  if (bookings.length === 0) {
    return <EmptyList />;
  }
  return (
    <div className="mt-16">
      <h4 className="mb-4 capitalize">total bookings: {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Order Totals</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } = booking;
            const { id: propertyId, name, country } = booking.property;
            const startDate = formatDate(checkIn);
            const endDate = formatDate(checkOut);
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/properties/${propertyId}`}
                    className="underline text-muted-foreground tracking-wide"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>
                  <CountryFlagAndName countryCode={country} />
                </TableCell>
                <TableCell>
                  {totalNights} {totalNights === 1 ? "night" : "nights"}
                </TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>{DeleteBooking({ bookingId: id })}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId });
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default BookingsPage;
