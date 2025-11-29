import type { CablePackagesListProps } from "../_types/cable.types";

export const CablePackagesList = ({ packages }: CablePackagesListProps) => {
  return (
    <div className="rounded-xl bg-gray-50 p-4 sm:p-6">
      <h3 className="mb-2 text-xl font-semibold sm:mb-4">Available Packages</h3>
      <ul className="space-y-2 md:space-y-3">
        {packages.map((item) => (
          <li
            key={item.id}
            className="flex flex-col items-center justify-between rounded-lg bg-white p-2 sm:flex-row sm:p-4"
          >
            <p>{item.name}</p>
            <p>
              <span className="text-red font-bold">{item.price}</span> /{" "}
              <b>Month</b>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
