export const ServiceCard = ({ id, src, title, text }) => {
  return (
    <article className="service__card" id={id}>
      <div className="logo">
        <img src={src} alt="..." />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};
