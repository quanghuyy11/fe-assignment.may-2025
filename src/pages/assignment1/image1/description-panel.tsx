import { ArrowUp, Circle, Clock5 } from "lucide-react";
import Category from "@/assets/category.svg";
import { Separator } from "@/components/ui/separator";

const description: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
];

interface Activity {
  color: string;
  text: string;
  time: string;
}

const activities: Activity[] = [
  {
    color: "bg-green-500",
    text: "RFX David Nguyen Submitted to underwriting",
    time: "2025-04-04 13:00:38",
  },
  {
    color: "bg-blue-800",
    text: "Lisa Rose approval",
    time: "2025-04-04 11:10:38",
  },
  {
    color: "bg-green-500",
    text: "RFX David Nguyen Submitted to underwriting",
    time: "2025-04-04 08:00:00",
  },
  {
    color: "bg-blue-800",
    text: "Lisa Rose create an issue",
    time: "2025-04-03 17:10:38",
  },
];

export default function DescriptionPanel() {
  return (
    <div className="flex-1 border-r border-gray-200 pr-6">
      <div className="flex flex-col gap-2 py-2 mb-6">
        <div className="flex items-center gap-2">
          <img src={Category} />
          <h2 className="text-md text-gray-600 font-semibold">Description</h2>
        </div>
        <Separator />
        <ul className="list-none text-sm space-y-2 text-gray-600 my-2">
          {description.map((item, i) => (
            <li key={item + i} className="flex gap-2 font-regular">
              <Circle color={"#005B86"} className="mt-1" size={16} />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex justify-start">
          <a className="mt-3 text-sm text-blue-600 hover:underline cursor-pointer">
            + Add sub-tickets
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src={Category} />
          <h2 className="text-md text-gray-600 font-semibold">Activity</h2>
        </div>
        <Separator />
        <ul className="relative border-l border-gray-300 ml-4 space-y-6 my-4">
          {activities.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span
                className={`absolute left-[-0.4rem] top-1 w-3 h-3 rounded-full ${item.color}`}
              />
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <span>{item.text}</span>
                <Clock5 size={16} />
                <span className="text-gray-600">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative bg-gray-100 rounded-md p-4 w-full">
          <textarea
            placeholder="Leave a comment ..."
            className="w-full bg-transparent outline-none resize-none text-sm text-gray-700 placeholder-gray-500"
            rows={3}
          />
          <button
            className="absolute bottom-2 right-2 text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Send comment"
          >
            <ArrowUp className="cursor-pointer" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
