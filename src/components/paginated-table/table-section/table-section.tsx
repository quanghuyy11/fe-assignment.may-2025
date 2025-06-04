import { Table, TableBody, TableHeader } from "@/components/ui/table";
import type { Column } from "../paginated-table.model";
import { TableHeaderRow } from "./components/table-header-row";
import { TableFilterRow } from "./components/table-filter-row";
import { TableBodyRows } from "./components/table-body-row";

interface TableSectionProps<
  T extends Record<string, string | number | null | undefined>
> {
  columns: Column<T>[];
  paginatedData: T[];
}

export function TableSection<
  T extends Record<string, string | number | null | undefined>
>({ columns, paginatedData }: TableSectionProps<T>) {
  return (
    <div className="overflow-x-auto rounded border shadow max-h-[48vh] relative">
      <Table
        className="w-full border-separate border-spacing-0"
      >
        <TableHeader className="sticky top-0 bg-secondary">
          <TableHeaderRow<T> columns={columns} />
          <TableFilterRow<T> columns={columns} />
        </TableHeader>
        <TableBody>
          <TableBodyRows<T> columns={columns} data={paginatedData} />
        </TableBody>
      </Table>
    </div>
  );
}
