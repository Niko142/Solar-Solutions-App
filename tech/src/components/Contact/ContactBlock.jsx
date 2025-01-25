import { useState } from "react";
import Button from "../UI/Button/Button";
import groups from "assets/images/Groups.svg";

export default function ContactModule() {
  const [type, setType] = useState("");
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__main">
          <h2>Who We Are</h2>
          <p>
            Welcome to our sales and marketing company, where we specialize in
            helping customers snag great deals from the leading solar and cable
            companies in the DC, Maryland, and Virginia area.We understand that
            finding the right solar and cable solutions for your needs can be a
            daunting task, which is why we're here to make the process easier
            and more affordable for you.
          </p>
          <div className="btn__bar">
            <Button isToogle={type === "read"} onClick={() => setType("read")}>
              Read More
            </Button>
            <Button
              isToogle={type === "contact"}
              onClick={() => setType("contact")}
            >
              Contact us today
            </Button>
          </div>
        </div>
        <div className="contact__img">
          <img src={groups} alt="People" />
        </div>
      </div>
    </section>
  );
}
