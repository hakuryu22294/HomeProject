import { formatQuantity } from "@/utils/format";

type PropertyDetailsProps = {
  details: {
    bedrooms: number;
    beds: number;
    guests: number;
    baths: number;
  };
};
function PropertyDetails({
  details: { bedrooms, beds, guests, baths },
}: PropertyDetailsProps) {
  return (
    <p className="text-md ">
      <span>{formatQuantity(bedrooms, "bedroom")} &middot;</span>
      <span>{formatQuantity(beds, "bed")} &middot;</span>
      <span>{formatQuantity(guests, "guest")} &middot;</span>
      <span>{formatQuantity(baths, "bath")} &middot;</span>
    </p>
  );
}
export default PropertyDetails;
