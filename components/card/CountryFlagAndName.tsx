import { findCountryByCode } from "@/utils/countries";

function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode)!;
  const countryName =
    validCountry.label.length > 20
      ? `${validCountry.label.substring(0, 20)}...`
      : validCountry.label;
  return (
    <span className="flex justify-between items-center gap-2 text-sm">
      {validCountry.flag} {countryName}
    </span>
  );
}
export default CountryFlagAndName;
