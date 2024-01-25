import { Container } from "react-bootstrap";

function FrontPageTexts() {
  return (
    <Container className="m-0 px-5">
      <p className="fs-1 mb-2 text-white">
        Unlock manufacturing efficiency and success <br /> with{" "}
        <span className="text-primary h1">PROCEJER</span>, remotely.
      </p>

      <p style={{ color: "#C05930" }} className="fs-3 mb-2 fw-light">
        Where precision meets progress, and every process propels your success
        story forward.
      </p>

      <p className="fs-3 text-white fw-light fst-italic">
        The most user-friendly ERP software tailored for small and medium-sized
        manufacturing enterprises
      </p>
    </Container>
  );
}

export default FrontPageTexts;
