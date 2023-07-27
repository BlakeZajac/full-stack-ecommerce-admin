"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColorColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const columns: ColumnDef<ColorColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.value}

        {/* Safer to use row.original.value for the background color with inline styling to avoid potential non-compile with Tailwind CSS dynamic classes */}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.value }}
        />
      </div>
    ),
  },

  {
    accessorKey: "createdAt",
    header: "Date",
  },

  {
    accessorKey: "actions",
    id: "actions",
    header: "Actions",

    cell: ({ row }) => {
      return <CellAction data={row.original} />;
    },
  },
];
