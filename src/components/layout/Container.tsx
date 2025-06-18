import { cn } from "@/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full min-h-[calc(100vh-4rem)] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl flex flex-col items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
