import "./Hero.scss";
import logo from "../../assets/logo/logo_hat.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__logo" src={logo} alt="wizard hat" />
      <h1 className="hero__title">Math Wizards</h1>
      <h2 className="hero__mission">Unlock the Magic of Numbers! 🪄✨</h2>
      <p>
        You will have <span className="number">40</span> seconds to answer as
        many equations as you can.
      </p>
    </section>
  );
}
export default Hero;
