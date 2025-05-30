import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import David from "@/assets/david.svg";
import Jennie from "@/assets/jennie.svg";
import Pep from "@/assets/pep.svg";
import Bruno from "@/assets/bruno.svg";
import DavidBeckham from "@/assets/david-beckham.svg";
import ArrowClockWise from "@/assets/arrow-clock-wise.svg";

const users = [
  {
    id: "U0001",
    name: "Mr. David Nguyen",
    code: "LO00001",
    type: "Loan Officer",
    phone: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    exp: "5 years",
    status: "active",
    avatar: David,
  },
  {
    id: "U0002",
    name: "Ms. Jennie Pink",
    code: "UW00001",
    type: "Underwriter",
    phone: "(322) 243-3452",
    email: "jenniepink@gmail.com",
    exp: "5 years",
    status: "active",
    avatar: Jennie,
  },
  {
    id: "U0003",
    name: "Mr. Pep Guardiola",
    code: "LP00001",
    type: "Loan Processor",
    phone: "(322) 243-3452",
    email: "pepguardiola@gmail.com",
    exp: "5 years",
    status: "active",
    avatar: Pep,
  },
  {
    id: "U0004",
    name: "Mr. Bruno Mar",
    code: "AD00001",
    type: "Admin",
    phone: "(322) 243-3452",
    email: "brunomors@gmail.com",
    exp: "5 years",
    status: "active",
    avatar: Bruno,
  },
  {
    id: "U0005",
    name: "Mr. David Beckham",
    code: "ME00001",
    type: "Member",
    phone: "(322) 243-3452",
    email: "davidbeckham@gmail.com",
    exp: "5 years",
    status: "active",
    avatar: DavidBeckham,
  },
];

export function UserTable() {
  return (
    <div className="flex-1 overflow-auto border-r">
      <div className="flex gap-2 text-lg text-mystification font-medium p-4">
        43 USERS
        <img src={ArrowClockWise} />
      </div>
      <table className="w-full text-sm border-collapse">
        <thead className="bg-pastel-wolves">
          <tr className="border-b">
            <th className="text-left ps-4 py-2">
              <Checkbox className="bg-white"></Checkbox>
            </th>
            <th className="flex flex-col text-left py-2">
              <span>User Name</span>
              <span>User ID</span>
            </th>
            <th className="text-left py-2">Contact Info</th>
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Experience</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="ps-4 py-2">
                <Checkbox></Checkbox>
              </td>
              <td className="flex gap-4 py-2 font-medium">
                <img src={user.avatar} />
                <div className="flex flex-col">
                  <span>{user.name}</span>
                  <span className="text-primary-text-color">{user.code}</span>
                </div>
              </td>
              <td className="py-2">
                <div>{user.phone}</div>
                <div>{user.email}</div>
              </td>
              <td className="py-2">{user.type}</td>
              <td className="py-2">{user.exp}</td>
              <td className="py-2">
                <Badge
                  variant="outline"
                  className="text-green-700 bg-pine-green border-0"
                >
                  ACTIVE
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
