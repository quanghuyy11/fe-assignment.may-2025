import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddressInput } from "../address-input/address-input";
import { setFormField } from "@/store/schema/schema-slice";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormSubmitDialog } from "../form-submit-dialog/form-submit-dialog";
import { useDynamicFormViewModel } from "./dynamic-form-render.view-model";

export const DynamicFormRenderer = () => {
  const {
    schema,
    formData,
    register,
    handleSubmit,
    errors,
    triggerAddressValidation,
    openDialog,
    submittedData,
    setOpenDialog,
    submitForm,
    handleInvalid,
    isAddressRequired,
    dispatch,
  } = useDynamicFormViewModel();

  if (!schema) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="space-y-5">
        {schema.title && <h1 className="text-bold text-xl">{schema.title}</h1>}

        {schema.properties &&
          Object.entries(schema.properties).map(([key, prop]) => {
            const value = formData[key];

            if (prop.format === "address") {
              return (
                <AddressInput
                  key={key}
                  label={prop.title}
                  required={isAddressRequired}
                  triggerValidation={triggerAddressValidation}
                />
              );
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

      <Button variant="sky" onClick={handleSubmit(submitForm, handleInvalid)}>
        Submit Form
      </Button>
      <FormSubmitDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        submittedData={submittedData}
      />
    </div>
  );
};
