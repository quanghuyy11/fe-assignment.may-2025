import { TableRow, TableCell } from "@/components/ui/table";
import type { Column } from "../../paginated-table.model";

export function TableBodyRows<
  T extends Record<string, string | number | null | undefined>
>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <>
      {data.map((row, rowIdx) => (
        <TableRow key={rowIdx}>
          {columns.map((col) => (
            <TableCell
              key={col.key as string}
              style={{
                minWidth: col.width,
                maxWidth: col.width,
              }}
            >
              {row[col.key] != null ? row[col.key]?.toString() : "N/A"}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
