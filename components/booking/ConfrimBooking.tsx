"use client";

import { useProperty } from "@/utils/store";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Button";
import { createBookingAction } from "@/utils/actions";

function ConfrimBooking() {
  const { userId } = useAuth();
  const { propertyId, range } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button type="button" className="w-full">
          Sign In to Complete Booking
        </Button>
      </SignInButton>
    );
  const createBooking = createBookingAction.bind(null, {
    propertyId,
    checkIn,
    checkOut,
  });
  return (
    <section>
      <FormContainer action={createBooking}>
        <SubmitButton text="Reserve" className="w-full" size="lg" />
      </FormContainer>
    </section>
  );
}
export default ConfrimBooking;
