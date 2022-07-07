import CardButton from "../UI/CardButton";
import NftCardList from "../UI/NftCardList";
import { Card,Row,Col,Container } from "react-bootstrap";
import React from 'react';   

const BuyNft = () => {
    const size=3;
    const width="18rem";
   

    const  cardData=[
        {
            imgUrl:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
            metaData:'the card title and make up thebulk of the cards content.'
        },
        {
            imgUrl:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
            metaData:'the card title and make up thebulk of the cards content.'
        },
        {
            imgUrl:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
            metaData:'the card title and make up thebulk of the cards content.'
        }
    ]

    

  return (
    <>
      <CardButton
        rowClass="mt-5 d-flex  align-items-center  justify-content-center"
        colClass="d-grid gap-2"
        buttonBg2="bg-danger"
        buttonBg1="bg-primary"
      ></CardButton>
      <div>
        <Container >

        <Row className="d-flex  align-items-center  justify-content-center">
            {
                cardData.map((data,index)=>
                (
                    <NftCardList colSize={size} cardWidth={width} imgUrl={data.imgUrl} metaData={data.metaData} key={index}  />
                )
            )            
            }
        </Row>
        </Container>

      </div>
    </>
  );
};
export default BuyNft;
