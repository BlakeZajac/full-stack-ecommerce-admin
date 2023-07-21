"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { store } from "@prisma/client";
import { Trash } from "lucide-react";

interface SettingsFormProps {
  initialData: store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preferences" />
      <Button variant="destructive" size="sm" onClick={() => {}}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};
