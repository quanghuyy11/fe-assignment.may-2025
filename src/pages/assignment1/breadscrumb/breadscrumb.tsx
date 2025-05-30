import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbData = {
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbData[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const lastIndex = items.length - 1;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={item.label}>
            <BreadcrumbPage
              className={index === lastIndex ? "text-sky-600" : "text-gray-600"}
            >
              {item.label}
            </BreadcrumbPage>
            {index < lastIndex && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
