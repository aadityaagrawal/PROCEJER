import { Container } from "react-bootstrap";
import "../App.css"
function FrontPageTexts() {
  return (
    <div className="m-0 px-5 d-flex flex-column justify-content-between">
      <p className="fs-1 mb-5 text-white responsive-width">
        ERP software specifically designed for small and medium-sized 
        manufacturing enterprises, emphasizing user-friendliness.
      </p>

      <ol className="text-white custom fs-5 p-3 mb-5 pb-5" >
        <li>
          Scale your business with software that is more user friendly than
          other ERP.
        </li>
        <li>Cloud ERP software with no download required</li>
        <li>Implementation from day 1</li>
        <li>Save at least 1 hour/ day by automating core functions.</li>
        <li>Achieve Higher Profitability | Prevent Order Delays.</li>
      </ol>

      {/* <p style={{ color: "#C05930" }} className="fs-3 mb-2 fw-light">
        Where precision meets progress, and every process propels your success
        story forward.
      </p>

      <p className="fs-3 text-white fw-light fst-italic">
        The most user-friendly ERP software tailored for small and medium-sized
        manufacturing enterprises
      </p> */}
    </div>
  );
}

export default FrontPageTexts;
