import { Z_INDEX, ZIndexPath } from "@/constants/styles/z-index";
import { cn } from "./cn";

function getNestedValue(path: string): number {
  const parts = path.split(".");
  let value: unknown = Z_INDEX;

  for (const part of parts) {
    if (value && typeof value === "object" && part in value) {
      value = value[part as keyof typeof value];
    } else {
      throw new Error(`Invalid z-index path: ${path}`);
    }
  }

  if (typeof value !== "number") {
    throw new Error(`Expected number at path: ${path}`);
  }

  return value;
}

export function getZIndex(path: ZIndexPath): string {
  try {
    const value = path.includes(".")
      ? getNestedValue(path)
      : Z_INDEX[path as keyof typeof Z_INDEX];

    return `z-[${value}]`;
  } catch (error) {
    console.error("Error getting z-index:", error);
    return "z-0"; // Fallback value
  }
}

/**
 * Combine Tailwind classes with z-index
 * @example combineWithZIndex("fixed inset-0", "overlay.backdrop")
 */
export function combineWithZIndex(classNames: string, zPath: ZIndexPath): string {
  return cn(classNames, getZIndex(zPath));
}
