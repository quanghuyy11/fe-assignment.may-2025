// components/CommonDialog.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleHelp } from "lucide-react";

export interface HelperDialogProps {
  title: string;
  description: string;
}

export const HelperDialog: React.FC<HelperDialogProps> = ({
  title,
  description,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CircleHelp className="cursor-pointer hover:opacity-50" size={20} />
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="whitespace-pre-wrap text-sm mt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
