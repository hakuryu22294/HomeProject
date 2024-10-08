import { fecthPropertyRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa6";

async function PropertyRating({
  propertyId,
  inPage,
}: {
  propertyId: string;
  inPage: boolean;
}) {
  const { rating, count } = await fecthPropertyRating(propertyId);
  if (count === 0) return null;
  const className = `flex gap-1 items-center ${inPage ? "text-md" : "text-xs"}`;
  const countText = count > 1 ? `${count} Reviews` : `${count} Review`;
  const countValue = `(${count}) ${inPage ? countText : ""}`;
  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
export default PropertyRating;
