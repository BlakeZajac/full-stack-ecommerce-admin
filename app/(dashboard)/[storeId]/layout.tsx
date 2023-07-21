import Navbar from "@/components/navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    storeId: string;
  };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Check for the store in prismadb
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  // If the store does not exist, redirect
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar /> {children}
    </>
  );
}
