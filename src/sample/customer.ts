import customers from "@/assets/json-data/customer.json";

export interface Customer {
  index: number;
  customerId: string;
  firstName: string;
  lastName: string;
  company: string;
  city: string;
  country: string;
  phone1: string;
  phone2: string;
  email: string;
  subscriptionDate: string;
  website: string;
  [key: string]: string | number | undefined;
}

export const customerData: Customer[] = customers as Customer[];