import { Row,Col } from "react-bootstrap";
import ButtonNft from "./ButtonNft";
const CardButton = (props) => {
  return (
    <Row className={props.rowClass}>
      <Col className={props.colClass}>
        <ButtonNft className={props.buttonBg1}>Buy NFT</ButtonNft>
      </Col>
      <Col className={props.colClass}>
        <ButtonNft className={props.buttonBg2}>Sell NFT</ButtonNft>
      </Col>
    </Row>
  );
};
export default CardButton;
