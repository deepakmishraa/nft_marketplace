import { Button } from "react-bootstrap";
const ButtonNft=(props)=>{
    console.log(props);
    return (
        <Button className={props.className}   size="lg" 
        >{props.children}</Button>
    );
}
export default ButtonNft;