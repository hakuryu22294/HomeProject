import { FaRegStar, FaStar } from "react-icons/fa6";

function Rating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className="flex gap-x-1">
      {stars.map((isFilled, i) => {
        const className = `w-3 h-3 ${
          isFilled ? "text-yellow-500" : "text-gray-300"
        }`;
        return isFilled ? (
          <FaStar key={i} className={className} />
        ) : (
          <FaRegStar key={i} className={className} />
        );
      })}
    </div>
  );
}
export default Rating;
