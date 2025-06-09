"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import DemoButton from "@/components/buttons/demo-button";
import { LogoImage } from "../server/LogoImage";
import { overlayVariants, menuItemVariants } from "../../animations/variants";
import { MobileOverlayProps } from "../../types";

export function MobileOverlay({ isOpen, onClose, items }: MobileOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={overlayVariants}
          className="fixed inset-0 z-[100] bg-white top-0"
        >
          <div className="flex flex-col min-h-screen">
            {/* Fixed Top Section */}
            <div className="sticky top-0 p-6 bg-white">
              <motion.button
                onClick={onClose}
                className="text-gray-800 absolute right-[5%] top-[50%]"
                whileHover={{ scale: 1.1 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Scrollable Middle Section */}
            <div className="flex-1 overflow-y-auto px-6 pt-24 pb-32">
              <nav className="flex flex-col space-y-8">
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
                      className="text-2xl font-medium text-gray-800 hover:text-primary-500"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Fixed Bottom Section */}
            <div className="sticky bottom-0 border-t border-gray-100 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="">
                  <LogoImage variant="mobile" />
                </div>
                <DemoButton />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
