import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import type { RootState } from "@/store/store";
import type { PaginatedTableProps } from "./paginated-table.model";
import { PaginatedSection } from "./paginated-section/paginated-section";
import { TableSection } from "./table-section/table-section";
import { Button } from "../ui/button";
import { resetAll, setPage } from "@/store/table/table-slice";

export function PaginatedTable<
  T extends Record<string, string | number | null | undefined>
>({
  data,
  columns,
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 20, 50],
}: PaginatedTableProps<T>) {
  const dispatch = useAppDispatch();

  const { page, sortBy, sortOrder, filters, pageSize } = useAppSelector(
    (state: RootState) => state.table
  );

  useEffect(() => {
    dispatch(setPage(1));
  }, [dispatch, filters]);

  const currentPageSize = useMemo(() => {
    return pageSize ? pageSize : defaultPageSize;
  }, [pageSize, defaultPageSize]);

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.every(({ key }) => {
        const filterVal = filters[key as string];
        if (!filterVal) return true;
        const cell = row[key];
        return cell?.toString().toLowerCase().includes(filterVal.toLowerCase());
      })
    );
  }, [filters, data, columns]);

  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortBy as keyof T];
      const bVal = b[sortBy as keyof T];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return sortOrder === "asc" ? 1 : -1;
      if (bVal == null) return sortOrder === "asc" ? -1 : 1;

      const aStr = aVal.toString().toLowerCase();
      const bStr = bVal.toString().toLowerCase();

      return sortOrder === "asc"
        ? aStr.localeCompare(bStr)
        : bStr.localeCompare(aStr);
    });
  }, [filteredData, sortBy, sortOrder]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * currentPageSize;
    return sortedData.slice(start, start + currentPageSize);
  }, [sortedData, page, currentPageSize]);

  const handleResetFormState = (): void => {
    dispatch(resetAll());
  };

  return (
    <div className="space-y-4 max-h-[60vh] px-3">
      <div className="w-full text-end">
        <Button variant={"sky"} onClick={handleResetFormState}>Reset Form State</Button>
      </div>
      <TableSection<T> columns={columns} paginatedData={paginatedData} />
      <PaginatedSection
        page={page}
        pageSize={currentPageSize}
        totalItems={sortedData.length}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
}
