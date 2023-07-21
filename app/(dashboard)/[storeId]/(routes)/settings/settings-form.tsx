"use client";

import { Heading } from "@/components/ui/heading";
import { store } from "@prisma/client";

interface SettingsFormProps {
  initialData: store;
}

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preferences." />
    </div>
  );
};
