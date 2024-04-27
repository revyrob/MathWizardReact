import "./Btn.scss";

function Btn({ text, className }) {
  return (
    <button className="btn">
      <span className={className}>{text}</span>
    </button>
  );
}

export default Btn;
