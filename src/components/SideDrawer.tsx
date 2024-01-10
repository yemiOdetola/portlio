"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function SideDrawer({
  isOpen,
  onClose,
  children,
}: SideDrawerProps) {
  const closeOnOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeOnOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
        >
          <motion.div
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "120%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 bottom-0 z-50 w-[440px] bg-white shadow-lg overflow-y-auto"
            onClick={closeOnOverlayClick}
          >
            <div className="flex justify-end p-4">
              <button onClick={onClose} className="text-gray-600">
                Close
              </button>
            </div>
            <div className="p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
