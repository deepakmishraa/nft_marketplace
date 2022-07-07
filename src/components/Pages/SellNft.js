import CardButton from "../UI/CardButton";
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";
import react,{ useState } from "react";
const SellNft = () => {
  const imgUrl =
    "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg";
  const metaData =
    "Some quick example text to build on the card title and make up thebulk of the card's content.";


    const [allowNft,setAllowNft]=useState(false);
    console.log(allowNft);

    const allowNftHandler=()=>{
        setAllowNft(true);
    }
    

  return (
    <>
      <CardButton
        rowClass="mt-5 d-flex  align-items-center  justify-content-center"
        colClass="d-grid gap-2"
        buttonBg1="bg-danger"
        buttonBg2="bg-primary"
      ></CardButton>
      <Container className="pt-5">
        <Row className="d-flex  align-items-center  justify-content-center mt-5">
          <Col sm={4}>
            {/* <Card className="shadow p-3 my-5">
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Enter Token ID
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter Token ID"
                  />
                </Form.Group>
                <Button className="w-100">Allow to sell</Button>
              </Form>
            </Card> */}

            <Card className="shadow p-3 my-5">
              <Card.Img variant="top" src={imgUrl} />
              <Card.Body>
                <Card.Text>{metaData}</Card.Text>
              </Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Emnter An Token Id
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter Token ID"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Enter An Price
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Enter Price"
                    disabled={!allowNft}
                  />
                </Form.Group>


                {
                    !allowNft &&   <Button className="w-100" onClick={allowNftHandler}>Allow to sell</Button>
                }
                
                {
                    allowNft && <Button className="w-100">Sell NFT</Button>
                }

              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SellNft;
