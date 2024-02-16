import "./Button.scss";

function Button({ text, className }) {
  return (
    <button className="btn">
      <span className={className}>{text}</span>
    </button>
  );
}

export default Button;
