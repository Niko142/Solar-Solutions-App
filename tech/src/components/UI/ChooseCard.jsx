import { useEffect, useRef, useState } from "react";

export const ChooseCard = ({ num, title, description }) => {
  const [target, setTarget] = useState(false);
  const card = useRef(null);

  useEffect(() => {
    const el = card.current;
    if (el) {
      if (target) {
        el.classList.add("card-hover");
      } else {
        el.classList.remove("card-hover");
      }
    }
  }, [target]);

  return (
    <article
      ref={card}
      className="choose__card"
      onMouseEnter={() => setTarget((prev) => (prev = true))}
      onMouseLeave={() => setTarget((prev) => (prev = false))}
    >
      <span>{num}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};
