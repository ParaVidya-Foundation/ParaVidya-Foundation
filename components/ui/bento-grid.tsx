import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:px-8 md:auto-rows-[20rem] md:grid-cols-3 font-inter",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-neutral-900",
        className,
      )}
    >
      {/* Header / Image / Skeleton */}
      <div className="w-full h-28 rounded-lg overflow-hidden">{header}</div>

      {/* Content */}
      <div className="flex flex-col mt-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400 transition-transform duration-300 group-hover:rotate-6">
            {icon}
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-100 font-poppins">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-inter">
          {description}
        </p>
        <span className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
  );
};
