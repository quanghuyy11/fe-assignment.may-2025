export interface Column<T> {
  key: keyof T;
  label: string;
  width: number;
}

export interface PaginatedTableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  width?: number;
}