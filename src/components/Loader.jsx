import { Spinner } from "react-bootstrap";

const Loader = () => {
  const styles = {
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "block",
  };

  return <Spinner animation="border" role="status" style={styles}></Spinner>;
};

export default Loader;
