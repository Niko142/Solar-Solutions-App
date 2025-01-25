import { experience } from "components/Data";
import { ExperienceCard } from "components/UI/ExperienceCard";

export default function ExperienceBlock() {
  
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="experience__header">Our Expertise and Experience</h2>
        <div className="experience__list">
          {experience.map((card, ind) => {
            return (
              <ExperienceCard
                key={ind}
                title={card.title}
                image={card.image}
                desctiption={card.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
