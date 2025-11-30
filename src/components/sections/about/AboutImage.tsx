import Image from "next/image";

export const AboutImage = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/solar-leads.svg"
        width={538}
        height={457}
        className="aspect-538/457 w-auto lg:min-w-90"
        alt="Company team"
        priority
      />
    </div>
  );
};
