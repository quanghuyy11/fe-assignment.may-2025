import { PaginatedTable } from "@/components/paginated-table/paginated-table";
import { customerData, type Customer } from "@/sample/customer";
import "./assignment3.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { customerColumns } from "./assignment3.model";

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

        <CardFooter className="justify-end mt-2">
          <Button variant={"sky"} onClick={() => navigate("/")}>
            Go back to menu
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
