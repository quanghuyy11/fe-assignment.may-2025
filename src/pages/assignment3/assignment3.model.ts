import type { Customer } from "@/sample/customer";

export const customerColumns: {
  key: keyof Customer;
  label: string;
  width: number;
}[] = [
  { key: "firstName", label: "First Name", width: 100 },
  { key: "lastName", label: "Last Name", width: 100 },
  { key: "company", label: "Country", width: 250 },
  { key: "city", label: "City", width: 250 },
  { key: "country", label: "Country", width: 300 },
  { key: "phone1", label: "Phone 1", width: 200 },
  { key: "phone2", label: "Phone 2", width: 200 },
  { key: "email", label: "Email", width: 260 },
  { key: "subscriptionDate", label: "Subscription Date", width: 150 },
  { key: "website", label: "Website", width: 200 },
];
