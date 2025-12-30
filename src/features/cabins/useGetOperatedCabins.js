import { useSearchParams } from "react-router-dom";
import { useCabins } from "./useCabins";

export function useGetOperatedCabins() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  // FILTERING
  const filterParameter = searchParams.get("discount") || "all";

  // ensure we always work with an array
  let filteredCabins = cabins ?? [];

  if (filterParameter === "with-discount")
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount > 0);

  if (filterParameter === "no-discount")
    filteredCabins = filteredCabins.filter((cabin) => cabin.discount === 0);

  // SORTING
  const sortParameter = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortParameter.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  // clone before sorting to avoid mutating source array
  const operatedCabins = [...filteredCabins].sort((a, b) => {
    const aVal = a?.[field];
    const bVal = b?.[field];

    // numeric comparison when both are numbers
    if (typeof aVal === "number" && typeof bVal === "number") {
      return (aVal - bVal) * modifier;
    }

    // fallback to string comparison
    return String(aVal ?? "").localeCompare(String(bVal ?? "")) * modifier;
  });

  return { isLoading, operatedCabins };
}
