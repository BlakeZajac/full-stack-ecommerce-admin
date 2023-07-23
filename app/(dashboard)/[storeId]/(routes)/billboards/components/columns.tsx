"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
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