import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "By name Ascending" },
          { value: "name-desc", label: "By name Descending" },
          { value: "regularPrice-asc", label: "By price Ascending" },
          { value: "regularPrice-desc", label: "By price Descending" },
          { value: "maxCapacity-asc", label: "By capacity Ascending" },
          { value: "maxCapacity-desc", label: "By capacity Descending" },
        ]}
      ></SortBy>
    </TableOperations>
  );
}

export default CabinTableOperations;
