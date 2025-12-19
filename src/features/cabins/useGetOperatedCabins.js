import { useSearchParams } from "react-router-dom";

export function useGetOperatedCabins(cabins) {
  const [searchParams] = useSearchParams();

  // FILTERING
  const filterParameter = searchParams.get("discount") || "all";

  if (!cabins) return;

  let filteredCabins;

  if (filterParameter === "all") filteredCabins = cabins;

  if (filterParameter === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  if (filterParameter === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  // SORTING
  const sortParameter = searchParams.get("sortBy") || "name-asc";
  const [field, direction] = sortParameter.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const operatedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return operatedCabins;
}
