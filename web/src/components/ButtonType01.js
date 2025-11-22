import "../styles/ButtonType01.css";

function ButtonType01({ buttonText, buttonClass }) {
  return (
    <>
      <button className={`Button01 ${buttonClass}`}>
        <p className="Button01_text after">{buttonText}</p>
        <p className="Button01_text">{buttonText}</p>
        <p className="Button01_text_default">{buttonText}</p>
      </button>
    </>
  );
}

export default ButtonType01;
