"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DemoButton from "@/components/buttons/demo-button";
import { MobileDrawerProps } from "../../types";
import { drawerVariants, menuItemVariants } from "../../animations/variants";

export function MobileDrawer({
  items,
  isOpen,
  onClose,
  shouldReduceMotion,
}: MobileDrawerProps) {
  const transition = shouldReduceMotion
    ? { duration: 0.1 }
    : { type: "spring", stiffness: 400, damping: 40 };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={shouldReduceMotion ? { duration: 0.1 } : undefined}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            transition={transition}
            className="fixed inset-y-0 right-0 w-64 bg-white p-6 shadow-lg"
          >
            <div className="flex h-full flex-col">
              <div className="flex flex-col space-y-6 pt-8">
                {items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                  >
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-gray-800 hover:text-primary-500"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-auto"
                custom={items.length}
                variants={menuItemVariants}
              >
                <DemoButton className="w-full" />
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
