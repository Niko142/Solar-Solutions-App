"use client";

import { useState } from "react";
import { LayoutContainer } from "@/shared/components";
import { fullText, shortText } from "./constants/text";

export const FooterHead = () => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const displayText = isShowMore ? fullText : shortText;

  return (
    <LayoutContainer>
      <section className="px-6 py-5 sm:px-11 md:px-15 md:py-8 lg:px-20 lg:pt-[47px] lg:pb-11 xl:ps-37.5 xl:pe-60">
        <p className="text-justify text-base/normal font-light sm:text-base md:text-lg/[31px]">
          <span className="sm:hidden">{displayText}</span>
          <span className="hidden sm:inline">{fullText}</span>
        </p>

        {/* Кнопка управления показом текста */}
        <button
          onClick={() => setIsShowMore(!isShowMore)}
          className="mt-2 text-sm text-blue-300 sm:hidden"
        >
          {isShowMore ? "Show less" : "Read more"}
        </button>
      </section>
    </LayoutContainer>
  );
};
