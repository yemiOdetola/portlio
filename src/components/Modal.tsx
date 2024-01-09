"use client";

import React, { ReactNode, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const closeOnOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeOnOverlayClick}
          className="fixed bglay inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-lg p-8 min-w-11/12 md:w-10/12 h-5/6"
          >
            <button
              onClick={onClose}
              className="text-xs font-bold underline absolute top-2 right-2"
            >
              Close
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
