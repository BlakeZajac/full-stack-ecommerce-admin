"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const setupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    // If modal is not open, open it!
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root page</div>;
};

export default setupPage;
