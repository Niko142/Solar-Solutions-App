import Image from "next/image";
import { contactData } from "@/shared/data/footer";
import Link from "next/link";

export const FooterContacts = () => {
  const contacts = contactData.filter((d) => d.content);
  const socials = contactData.filter((d) => !d.content);

  return (
    <article className="flex flex-col items-center gap-[17px] md:items-start lg:col-start-4 lg:pt-30">
      <h5 className="text-base/relaxed font-normal capitalize xl:text-base/[35px]">
        Contact
      </h5>

      <nav className="w-full">
        <ul className="mb-5.5 flex flex-col items-center gap-5 md:items-baseline">
          {contacts.map((item, ind) => (
            <li key={ind}>
              <Link
                href={item.href}
                className="flex items-center gap-2 text-base/[19px] font-light md:gap-4.5"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={21}
                  height={21}
                  className="aspect-square"
                />
                {item.content}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap justify-center gap-3 md:justify-start">
          {socials.map((item, ind) => (
            <li key={ind}>
              <Link href={item.href} target="_blank">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="aspect-square"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
};
