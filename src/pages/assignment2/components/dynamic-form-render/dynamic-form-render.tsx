import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useMemo } from "react";
import { AddressInput } from "../address-input/address-input";
import { setFormField } from "@/store/schema/schema-slice";
import type { JSONSchemaType } from "@/sample/schema";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const DynamicFormRenderer = () => {
  const dispatch = useAppDispatch();
  const jsonSchema = useAppSelector((state) => state.schema.jsonSchema);
  const formData = useAppSelector((state) => state.schema.formData) || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const schema: JSONSchemaType | null = useMemo(() => {
    try {
      const parsed = JSON.parse(jsonSchema);
      if (
        parsed &&
        parsed.type === "object" &&
        typeof parsed.properties === "object"
      ) {
        reset();
        return parsed as JSONSchemaType;
      }
    } catch {
      console.log("Invalid format schema!");
    }
    return null;
  }, [jsonSchema, reset]);

  if (!schema) return null;

  const onSubmit = (): void => {
    console.log("oke");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-5">
        {schema.title && <h1 className="text-bold text-xl">{schema.title}</h1>}
        {schema.properties &&
          Object.entries(schema.properties).map(([key, prop]) => {
            const value = formData?.[key];

            if (prop.format === "address") {
              return <AddressInput key={key} label={prop.title} />;
            }

            if (prop.type === "boolean") {
              return (
                <div key={key} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id={key}
                      checked={Boolean(value)}
                      {...register(key, {
                        required: schema.required?.includes(key)
                          ? `${prop.title} is required`
                          : false,
                      })}
                      onCheckedChange={(checked) =>
                        dispatch(setFormField({ key, value: Boolean(checked) }))
                      }
                    />
                    <Label htmlFor={key}>{prop.title}</Label>
                  </div>
                  {errors[key] && (
                    <span className="text-red-500 text-sm">
                      {errors[key]?.message as string}
                    </span>
                  )}
                </div>
              );
            }

            return (
              <div key={key}>
                <Label className="text-sm font-medium text-gray-700">
                  {prop.title}
                </Label>
                <Input
                  type={prop.type === "number" ? "number" : "text"}
                  value={
                    typeof value === "boolean" ? String(value) : value ?? ""
                  }
                  placeholder={prop.placeHolder ?? ""}
                  {...register(key, {
                    required: schema.required?.includes(key)
                      ? `${prop.title} is required`
                      : false,
                  })}
                  onChange={(e) =>
                    dispatch(
                      setFormField({
                        key,
                        value:
                          prop.type === "number"
                            ? Number(e.target.value)
                            : e.target.value,
                      })
                    )
                  }
                />
                {errors[key] && (
                  <span className="text-red-500 text-sm">
                    {errors[key]?.message as string}
                  </span>
                )}
              </div>
            );
          })}
      </div>
      <Button variant={"sky"} onClick={handleSubmit(onSubmit)}>Submit Form</Button>
    </div>
  );
};
