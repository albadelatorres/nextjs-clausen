"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
  open: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  // Disable body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close dialog when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        onOpenChange();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return createPortal(
    // The outer div acts as the backdrop and listens for clicks to close the dialog.
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onOpenChange}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50" />

      {/* Render the dialog content */}
      {children}
    </div>,
    document.body
  );
}

interface DialogContentProps {
  className?: string;
  children: React.ReactNode;
}

export function DialogContent({ className = "", children }: DialogContentProps) {
  return (
    // Stop propagation so clicks inside the dialog content don't trigger the backdrop's onClick.
    <div
      className={`relative z-10 bg-white rounded-lg shadow-lg ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}