import { TableRow, TableHead } from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setSort } from "@/store/table/table-slice";
import type { Column } from "../../paginated-table.model";

export function TableHeaderRow<
  T extends Record<string, string | number | null | undefined>
>({ columns }: { columns: Column<T>[] }) {
  const dispatch = useAppDispatch();
  const { sortBy, sortOrder } = useAppSelector((state) => state.table);

  return (
    <TableRow>
      {columns.map((col) => (
        <TableHead
          key={col.key as string}
          onClick={() => dispatch(setSort({ sortBy: col.key as string }))}
          className="cursor-pointer hover:bg-gray-100 whitespace-nowrap"
          style={{
            minWidth: col.width,
            maxWidth: col.width,
          }}
        >
          <div className="flex items-center justify-between hover:opacity-50">
            {col.label}
            {sortBy === col.key &&
              (sortOrder === "asc" ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              ))}
          </div>
        </TableHead>
      ))}
    </TableRow>
  );
}
