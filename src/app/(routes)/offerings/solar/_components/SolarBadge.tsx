import { Sun } from "lucide-react";

export const SolarBadge = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-yellow-200 p-4 text-center sm:gap-4 sm:p-6">
      <Sun size={40} className="text-yellow-600" />
      <b className="text-lg/normal text-gray-700 capitalize">
        Clean, renewable energy
      </b>
    </div>
  );
};
