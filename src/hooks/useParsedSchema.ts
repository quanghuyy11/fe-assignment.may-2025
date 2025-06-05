import type { JSONSchemaType } from "@/sample/schema";
import { useMemo } from "react";

type JSONSchemaCallback  = () => void;

/**
 * Parses a JSON string into JSONSchemaType.
 * Executes optional callback on success.
 */
export function useParsedSchema(
  jsonSchema: string,
  callbackFunc?: JSONSchemaCallback
): JSONSchemaType | null {
  return useMemo(() => {
    try {
      const parsed = JSON.parse(jsonSchema);
      if (
        parsed &&
        parsed.type === "object" &&
        typeof parsed.properties === "object"
      ) {
        callbackFunc?.();
        const schema = parsed as JSONSchemaType;
        return schema;
      }
    } catch {
      console.warn("Invalid schema format!");
    }
    return null;
  }, [jsonSchema, callbackFunc]);
}
