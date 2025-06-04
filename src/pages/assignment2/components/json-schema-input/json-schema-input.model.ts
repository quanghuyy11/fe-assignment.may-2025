export const guideSchema = `
  1. Start with this structure:
  {
    "title": "Form title",
    "type": "object",
    "properties": { ... }
  }

  2. For each field inside "properties":
  - "type": data type (string, number, boolean)
  - "title": label shown in the form
  - "format": optional, supports "email" or "address"
  - "placeHolder": optional, shown as input hint

  3. Add "required" as an array of required field names:
  "required": ["firstName", "email"]

  Example:
  {
    "title": "User Profile",
    "type": "object",
    "properties": {
      "firstName": { "type": "string", "title": "First Name", "placeHolder": "Enter your first name" },
      "email": { "type": "string", "title": "Email", "format": "email" },
      "age": { "type": "number", "title": "Age" },
      "address": { "type": "string", "title": "Address", "format": "address" }
    },
    "required": ["firstName", "email"]
  }
`;
