import { Link } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[E6EFFA] gap-4">
      <Button asChild>
        <Link to="/image1">Image 1</Link>
      </Button>
      <Button asChild>
        <Link to="/image2">Image 2</Link>
      </Button>
      <Button asChild>
        <Link to="/image3">Image 3</Link>
      </Button>
      <Button asChild>
        <Link to="/image1">Assignment 2</Link>
      </Button>
      <Button asChild>
        <Link to="/image1">Assignment 3</Link>
      </Button>
    </div>
  )
}

export default App
