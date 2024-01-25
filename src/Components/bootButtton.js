import Button from "react-bootstrap/Button";
import arrowIcon from "../Assets/Images/arrow-icon.svg";

function BootButtton() {
  return (
    <>
      <Button variant="primary" className="p-3 rounded-pill m-4">
        <div className="d-flex align-items-center">
          <p className="m-0">Inquire Now &nbsp;</p>

          <img src={arrowIcon} alt="Icon Logo" />
        </div>
      </Button>{" "}
    </>
  );
}

export default BootButtton;
