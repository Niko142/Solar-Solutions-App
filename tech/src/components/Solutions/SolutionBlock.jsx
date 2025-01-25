import Solutions from "assets/images/Solution.svg";

export default function SolutionBlock() {
  return (
    <section className="solution" id="solution">
      <div className="container">
        <div className="image__background">
          <img src={Solutions} alt="Background" />
          <h1 className="solution__title">
            Solar <span>Solutions</span> for a Sustainable Tomorrow{" "}
            <span>.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
