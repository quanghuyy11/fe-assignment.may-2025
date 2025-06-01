export interface PaginatedSectionProps {
  page: number;
  pageSize: number;
  totalItems: number;
  pageSizeOptions: number[];
}

export const generatePages = (current: number, total: number): (number | "...")[] => {
  const pages: (number | "...")[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (current <= 3) {
    for (let i = 2; i <= 4; i++) pages.push(i);
    pages.push("...");
  } else if (current >= total - 2) {
    pages.push("...");
    for (let i = total - 3; i < total; i++) pages.push(i);
  } else {
    pages.push("...");
    pages.push(current - 1);
    pages.push(current);
    pages.push(current + 1);
    pages.push("...");
  }

  pages.push(total);

  return pages;
};
