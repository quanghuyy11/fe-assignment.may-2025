import { PaginatedTable } from "@/components/paginated-table/paginated-table";
import { customerData, type Customer } from "@/sample/customer";
import "./assignment3.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const customerColumns: { key: keyof Customer; label: string }[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "company", label: "Country" },
  { key: "city", label: "City" },
  { key: "country", label: "Country" },
  { key: "phone1", label: "Phone 1" },
  { key: "phone2", label: "Phone 2" },
  { key: "email", label: "Email" },
  { key: "subscriptionDate", label: "Subscription Date" },
  { key: "website", label: "Website" },
];

const pageSizeOptions: number[] = [5, 10, 20, 50];

export default function Assignment3() {
  const navigate = useNavigate();
  const data: Customer[] = customerData;
  const pageSize = 5;

  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient py-8">
      <Card className="w-full max-w-[80%] shadow-xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl">Customer Table</CardTitle>
        </CardHeader>

        <CardContent>
          <PaginatedTable<Customer>
            data={data}
            columns={customerColumns}
            defaultPageSize={pageSize}
            pageSizeOptions={pageSizeOptions}
          />
        </CardContent>

        <CardFooter className="justify-end">
          <Button className="mt-2" onClick={() => navigate("/")}>
            Go back to menu
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
