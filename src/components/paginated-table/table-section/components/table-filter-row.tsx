import { TableRow, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setFilter } from "@/store/table/table-slice";
import type { Column } from "../../paginated-table.model";

export function TableFilterRow<
  T extends Record<string, string | number | null | undefined>
>({ columns }: { columns: Column<T>[] }) {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.table);

  return (
    <TableRow>
      {columns.map((col) => (
        <TableCell key={col.key as string}>
          <Input
            className="h-8"
            placeholder={`Filter ${col.label}`}
            value={filters[col.key as string] || ""}
            onChange={(e) =>
              dispatch(
                setFilter({ key: col.key as string, value: e.target.value })
              )
            }
          />
        </TableCell>
      ))}
    </TableRow>
  );
}
