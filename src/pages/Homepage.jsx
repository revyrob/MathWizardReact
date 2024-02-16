import "../App.scss";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="wizard-style">
      <h1 className="wizard-style__title">Math Wizards</h1>
      <h2 className="wizard-style__mission">
        A place where wizards can sharpen their math skills 🪄
      </h2>
      <p>
        You will have <span className="number">3</span> minutes to answer as
        many equations as possible.
      </p>
      <div className="wizard-style__wrapper">
        <Link to="/equation">
          <Button className="goToGame__btn" text="Play Game" />
        </Link>
        <Link to="">
          <Button className="goToGame__btn" text="How to Play" />
        </Link>
        <Link to="">
          <Button className="goToGame__btn" text="Log in" />
        </Link>
      </div>
    </section>
  );
}
export default Hero;
