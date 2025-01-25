import { ChooseCard } from "components/UI/ChooseCard";
import { choosing } from "../Data";

export default function ChooseBlock() {
  return (
    <section className="choose">
      <div className="container">
        <div className="choose__list">
          <article className="choose__start">
            <h2>Why Choose Us?</h2>
            <p>
              Whether you're looking to switch to solar energy or upgrade your
              cable services, our sales and marketing company is here to help.
            </p>
          </article>
          {choosing.map((card, ind) => {
            return (
              <ChooseCard
                key={ind}
                num={card.number}
                title={card.header}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
