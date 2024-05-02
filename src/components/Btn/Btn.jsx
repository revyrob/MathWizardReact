import "./Btn.scss";

function Btn({ text, className, value, onClick }) {
  return (
    <button className="btn" value={value} onClick={onClick}>
      <span className={className}>{text}</span>
    </button>
  );
}

export default Btn;
