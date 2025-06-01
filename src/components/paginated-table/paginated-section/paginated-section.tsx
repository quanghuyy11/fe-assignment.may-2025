import { setPage } from "@/store/table/table-slice";
import { setPageSize } from "@/store/table/table-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import { Button } from "@/components/ui/button";
import {
  generatePages,
  type PaginatedSectionProps,
} from "./paginated-section.model";
import { cn } from "@/lib/utils";

export const PaginatedSection = ({
  page,
  pageSize,
  totalItems,
  pageSizeOptions,
}: PaginatedSectionProps) => {
  const dispatch = useAppDispatch();
  const totalPages = Math.ceil(totalItems / pageSize);
  const pages = generatePages(page, totalPages);

  const goToPage = (p: number) => {
    if (p >= 1 && p <= totalPages) dispatch(setPage(p));
  };

  return (
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium">Rows per page:</label>
        <select
          value={pageSize}
          onChange={(e) => {
            dispatch(setPage(1));
            dispatch(setPageSize(Number(e.target.value)));
          }}
          className="border rounded px-2 py-1 text-sm"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-1 items-center flex-wrap">
        <Button
          onClick={() => goToPage(1)}
          disabled={page === 1}
          className="px-2 py-1 text-sm"
        >
          {"<<"}
        </Button>
        <Button
          onClick={() => goToPage(page - 1)}
          disabled={page === 1}
          className="px-2 py-1 text-sm"
        >
          Prev
        </Button>

        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={`dots-${idx}`} className="px-2 text-sm">
              ...
            </span>
          ) : (
            <Button
              key={p}
              variant={p === page ? "default" : "outline"}
              onClick={() => goToPage(p)}
              className={cn(
                "px-3 py-1 text-sm",
                p === page && "bg-gray-200 font-bold"
              )}
            >
              {p}
            </Button>
          )
        )}

        <Button
          onClick={() => goToPage(page + 1)}
          disabled={page === totalPages}
          className="px-2 py-1 text-sm"
        >
          Next
        </Button>
        <Button
          onClick={() => goToPage(totalPages)}
          disabled={page === totalPages}
          className="px-2 py-1 text-sm"
        >
          {">>"}
        </Button>
      </div>
    </div>
  );
};
