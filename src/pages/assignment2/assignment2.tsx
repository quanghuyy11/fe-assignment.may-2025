import { FormRender } from "./components/form-render";
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

export default function Assignment2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient">
      <Card className="w-full max-w-xl shadow-xl border border-gray-200">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Assignment 2</CardTitle>
        </CardHeader>

        <CardContent>
          <FormRender />
        </CardContent>

        <CardFooter className="justify-end">
          <Button onClick={() => navigate("/")}>Go back to menu</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
