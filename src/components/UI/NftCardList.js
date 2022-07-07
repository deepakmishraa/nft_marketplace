import {Card,Col} from "react-bootstrap";
const NftCardList = (props) => {
    console.log(props);
  return (
    <Col sm={props.colSize}>
      <Card style={{ width: props.cardWidth }}>
        <Card.Img
          variant="top"
          src={props.imgUrl}
        />
        <Card.Body>
          <Card.Text>
               {props.metaData} 
          </Card.Text>
        </Card.Body>
        <Card.Body>
            <button>Allow NFT MarketPlace</button>
        </Card.Body>
        <Card.Body>
          <button>Buy NFT</button>

        </Card.Body>
      </Card>
    </Col>
  );
};
export default NftCardList;
