import type { PageHeaderProps } from "@/types/common.types";

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="font-poppins mb-4 flex flex-col items-center gap-2 text-center sm:mb-6 md:mb-8 md:gap-4">
      <h1 className="service leading-tight capitalize">{title}</h1>
      <p className="text-lg/tight text-gray-600 md:text-xl/normal">
        {description}
      </p>
    </div>
  );
};
