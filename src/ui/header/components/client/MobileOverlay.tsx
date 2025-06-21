"use client";

import { motion, AnimatePresence } from "framer-motion";
// import ThemeToggle from "@/components/client/ThemeToggle";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import DemoButton from "@/components/buttons/demo-button";
import { Portal } from "@/utils/Portal";
import { LogoImage } from "../server/LogoImage";
import {
  overlayVariants,
  menuItemVariants,
  backdropVariants,
} from "../../animations/variants";
import { lockScroll, unlockScroll } from "../../utils/scroll-lock";
import { combineWithZIndex } from "@/utils/styles";
import { MobileOverlayProps } from "../../types";

import { Z_INDEX } from "@/constants/styles/z-index";

function Backdrop({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={backdropVariants}
      className={combineWithZIndex(
        "fixed inset-0 bg-black/50 backdrop-blur-sm",
        "overlay.backdrop"
      )}
      style={{ zIndex: Z_INDEX.overlay.backdrop }}
      onClick={onClick}
    />
  );
}

export function MobileOverlay({ isOpen, onClose, items }: MobileOverlayProps) {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            <Backdrop isOpen={isOpen} onClick={onClose} />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className={combineWithZIndex(
                "fixed inset-0 bg-white dark:bg-gray-900/95 overflow-hidden backdrop-blur-sm",
                "overlay.content"
              )}
              style={{ zIndex: Z_INDEX.overlay.content }}
            >
              <div className="relative flex flex-col h-[100dvh]">
                {/* Header - Static */}
                <div className="p-6">
                  <motion.button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col space-y-8 px-6 py-12">
                    {items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        custom={i}
                        initial="initial"
                        animate="animate"
                        variants={menuItemVariants}
                      >
                        <Link
                          href={item.href}
                          className="text-2xl font-medium text-gray-800 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 transition-colors"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer - Fixed */}
                <div className="mt-auto border-t border-gray-200 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-32">
                      <LogoImage variant="mobile" />
                    </div>
                    <DemoButton />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
