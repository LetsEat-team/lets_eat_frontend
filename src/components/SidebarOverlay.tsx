// src/components/SidebarOverlay.tsx
import { motion, AnimatePresence } from "framer-motion";

interface SidebarOverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function SidebarOverlay({ isOpen, onClick }: SidebarOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}
