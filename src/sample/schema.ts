export type JSONSchemaType = {
  title: string;
  type: "object";
  properties: Record<
    string,
    {
      type: "string" | "number" | "boolean";
      title: string;
      format?: string;
      placeHolder?: string;
    }
  >;
  required?: string[];
};

export const sampleSchemas: JSONSchemaType[] = [
  {
    title: "User Profile",
    type: "object",
    properties: {
      firstName: { type: "string", title: "First Name", placeHolder: "Your first name" },
      lastName: { type: "string", title: "Last Name" },
      age: { type: "number", title: "Age" },
      address: {
        type: "string",
        format: "address",
        title: "Address",
      },
    },
    required: ["firstName", "lastName"],
  },
  {
    title: "Newsletter Signup",
    type: "object",
    properties: {
      email: { type: "string", format: "email", title: "Email" },
      subscribe: { type: "boolean", title: "Receive notifications" },
      address: {
        type: "string",
        format: "address",
        title: "Address",
      },
    },
    required: ["email"],
  },
];
