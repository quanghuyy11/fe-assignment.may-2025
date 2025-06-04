import "./assignment2.css";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JsonSchemaInput } from "./components/json-schema-input/json-schema-input";
import { DynamicFormRenderer } from "./components/dynamic-form-render/dynamic-form-render";

export default function Assignment2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient">
      <Card className="w-full max-w-xl shadow-xl border border-gray-200 my-6">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Assignment 2</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
          <JsonSchemaInput />
          <DynamicFormRenderer />
        </CardContent>

        <CardFooter className="justify-end">
          <Button variant={"sky"} onClick={() => navigate("/")}>Go back to menu</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
