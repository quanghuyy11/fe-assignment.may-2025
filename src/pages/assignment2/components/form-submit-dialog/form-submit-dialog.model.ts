export type FormSubmitType = number | string;

export interface FormSubmitDialogProps {
  open: boolean;
  onClose: () => void;
  submittedData: Record<string, FormSubmitType>;
}