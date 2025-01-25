import { ServiceCard } from "components/UI/ServiceCard";
import Service from "../../assets/images/Service.svg";
import { serviceBlocks } from "components/Data";

export default function ServiceContent() {
  return (
    <section className="service">
      <div className="container">
        <h5>Our Services</h5>
        <h2>What We Do</h2>
        <div className="service__list">
          {serviceBlocks.map((card) => {
            return (
              <ServiceCard
                key={card.id}
                id={card.href}
                src={card.image}
                title={card.title}
                text={card.description}
              />
            );
          })}
          <div className="service__image">
            <img src={Service} alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
}
