import { Separator } from "@/components/ui/separator";
import type { FC } from "react";
import Book from "@/assets/book.svg";
import Percent from "@/assets/percent.svg";
import ClipBoard from "@/assets/clipboard.svg";
import File from "@/assets/file.svg";
import ChartLineUp from "@/assets/chart-line-up.svg";
import NotePencil from "@/assets/note-pencil.svg";
import ArrowSquareDeactive from "@/assets/arrow-square-deactive.svg";
import ArrowSquareActive from "@/assets/arrow-square-active.svg";
import FileText from "@/assets/file-text.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoItem {
  label: string;
  value: string;
}

const infoList: InfoItem[] = [
  { label: "First Name", value: "David" },
  { label: "Last Name", value: "Nguyen" },
  { label: "Experience", value: "5 years" },
  { label: "Personal Website", value: "david.com" },
];

const GeneralInformationBlock: FC = () => (
  <div className="grid grid-cols-4 gap-x-4 gap-y-3 text-sm mb-6 mt-4">
    {infoList.map((item, idx) => (
      <div key={idx}>
        <div className="font-semibold text-sm">{item.label}</div>
        <div className="font-normal text-sm">{item.value}</div>
      </div>
    ))}
  </div>
);

export function UserDetailPanel() {
  return (
    <div className="w-[650px] p-4 pt-2 text-sm overflow-auto">
      <div className="pt-4">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
          <span className="inline-flex items-center gap-2 text-sonic-silver">
            <img src={Book}></img>
            GENERAL INFORMATION
          </span>
        </div>
        <Separator />
        <GeneralInformationBlock />
        <GeneralInformationBlock />
      </div>

      <div className="py-4 flex items-center justify-between font-medium text-sm text-gray-700 cursor-pointer">
        <div className="inline-flex items-center gap-2 text-sonic-silver">
          <img src={Percent}></img>
          COMMISSION STRUCTURES
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <img className="cursor-pointer" src={ArrowSquareDeactive} />
            </TooltipTrigger>
            <TooltipContent>
              <p>You don’t have permission to open this link</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Separator />

      <div className="py-4 flex items-center justify-between font-medium text-sm text-gray-700 cursor-pointer">
        <div className="inline-flex items-center gap-2 text-sonic-silver">
          <img src={ClipBoard}></img>
          RECRUITMENT DOCUMENTS
        </div>
        <img src={ArrowSquareActive} />
      </div>
      <Separator />

      <div className="pt-4">
        <div className="flex items-center  text-sm font-medium text-gray-700 mb-2 gap-2 text-sonic-silver">
          <img src={File}></img>
          RELATED CLIENTS & LOAN DOCUMENTS
        </div>
        <Separator />
        <table className="w-full text-xs border border-gray-200 mt-3">
          <thead className="bg-pastel-wolves text-gray-600">
            <tr>
              <th className="px-2 py-1 text-left">Index</th>
              <th className="px-2 py-1 text-left">
                Borrower Name
                <br />
                <span className="text-gray-400">Loan ID</span>
              </th>
              <th className="px-2 py-1 text-left">
                Lender
                <br />
                Interest Rate
              </th>
              <th className="px-2 py-1 text-left">Process</th>
              <th className="px-2 py-1 text-left">Status</th>
              <th className="px-2 py-1 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2].map((idx) => (
              <tr key={idx}>
                <td className="px-2 py-1">0{idx}</td>
                <td className="px-2 py-1">
                  Ms. Hang Nguyen
                  <div className="text-gray-400">#LA0001</div>
                </td>
                <td className="px-2 py-1">
                  AD Mortgage
                  <div className="text-gray-500">6% (6.168% APR)</div>
                </td>
                <td className="px-2 py-1">
                  <div className="flex items-center gap-1">
                    <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="bg-mystification h-full"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-gray-600">68%</span>
                  </div>
                </td>
                <td className="px-2 py-1">
                  <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-1 rounded">
                    IN PROGRESS
                  </span>
                </td>
                <td className="px-2 py-1 text-blue-500">
                  <img src={FileText} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 py-4 text-sm font-medium text-sonic-silver cursor-pointer">
        <img src={ChartLineUp}></img>
        PERFORMANCE
      </div>
      <Separator />

      <div className="pt-4">
        <div className="flex gap-2 items-center text-sm font-medium text-sonic-silver mb-2">
          <img src={NotePencil}></img>
          TO-DO
        </div>
        <Separator />
        <ul className="text-xs text-gray-700 flex flex-col gap-2 mt-2">
          <li className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Review Loan Applications</span>
            <span className="text-blue-500 ml-auto">↗</span>
          </li>
          <li className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Contact to Borrower</span>
            <span className="text-blue-500 ml-auto">↗</span>
          </li>
          <li className="flex items-center gap-2 text-gray-400">
            <input type="checkbox" disabled />
            <span>Click to add new todo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
