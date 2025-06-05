import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { FormSubmitDialogProps } from "./form-submit-dialog.model";

export const FormSubmitDialog: React.FC<FormSubmitDialogProps> = ({
  open,
  onClose,
  submittedData,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form Submitted Successfully</DialogTitle>
        </DialogHeader>

        <div className="max-h-60 overflow-y-auto rounded-md border p-4 text-sm font-mono bg-gray-50">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>

        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
