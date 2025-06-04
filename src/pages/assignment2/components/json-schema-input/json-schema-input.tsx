import { Textarea } from "@/components/ui/textarea";
import { guideSchema } from "./json-schema-input.model";
import { HelperDialog } from "@/components/helper-dialog/helper-dialog";
import { useState } from "react";
import { sampleSchemas } from "@/sample/schema";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { resetFormSchema, setJsonSchema } from "@/store/schema/schema-slice";
import { resetAddress } from "@/store/address/address-slice";
import type { RootState } from "@/store/store";

export const JsonSchemaInput = () => {
  const dispatch = useAppDispatch();
  const jsonSchema = useAppSelector(
    (state: RootState) => state.schema.jsonSchema
  );

  const [schema, setSchema] = useState<string>(jsonSchema);
  const [renderErrorMsg, setRenderErrorMsg] = useState<string>("");

  const handleRenderForm = () => {
    try {
      if (!schema || schema.trim() === "") {
        setRenderErrorMsg("Input your schema, please!");
      }
      JSON.parse(schema);
      console.log(schema);

      dispatch(setJsonSchema(schema));
      setRenderErrorMsg("");
    } catch {
      setRenderErrorMsg("Something wrong, check format please!");
    }
  };

  const handleResetFormSchema = (): void => {
    dispatch(resetFormSchema());
    dispatch(resetAddress());
    setSchema("");
  };

  return (
    <div className="flex flex-col gap-2 my-3">
      <div className="flex gap-4 justify-end">
        <Button onClick={handleRenderForm}>Render Form</Button>
        <Button variant="sky" onClick={handleResetFormSchema}>
          Reset
        </Button>
      </div>
      <div className="flex justify-between">
        <span className="text-red-500 text-sm">{renderErrorMsg}</span>
        <HelperDialog
          title="How to write a JSON Schema"
          description={guideSchema}
        />
      </div>
      <Textarea
        className="w-full h-60 text-sm font-mono"
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
        placeholder="Paste your JSON schema here..."
      />
      <div className="flex gap-4">
        {sampleSchemas.map((schema, idx) => (
          <Button
            key={idx}
            onClick={() => setSchema(JSON.stringify(schema, null, 2))}
          >
            Load Sample {idx + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};
