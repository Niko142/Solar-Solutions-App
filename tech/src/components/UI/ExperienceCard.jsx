export const ExperienceCard = ({ image, title, desctiption }) => {
  return (
    <article
      className="experience__card"
      style={{
        background: `linear-gradient(180deg, #131313 -40.94%, rgba(19, 19, 19, 0) 100%), url(${image}) no-repeat center`,
      }}
    >
      <h4>{title}</h4>
      <p>{desctiption}</p>
    </article>
  );
};
