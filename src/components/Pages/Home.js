import {Container } from "react-bootstrap";
import CardButton from '../UI/CardButton';

const Home=()=>{
    return (
        <Container className="" style={{height:'100vh'}}>
          <CardButton rowClass="h-100 text-white d-flex  align-items-center  justify-content-center" colClass="d-grid gap-2" buttonBg1="bg-danger" buttonBg2="bg-primary" ></CardButton>    
        </Container>
    );
}
export default Home;