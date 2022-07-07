import { Container } from "react-bootstrap";
import Home from "./components/Pages/Home";
import BuyNft from "./components/Pages/BuyNft";
import SellNft from "./components/Pages/SellNft";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useMoralisWeb3Api,useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      console.log("Inject Web3 wallet");
    }
  });

  const Web3Api = useMoralisWeb3Api();
  const fetchNFTsForContract = async () => {
    alert("klh")
    const options = {
      chain: "bsc testnet",
      address: "0x6fB251Aa440162e70e2956e36c188Fa49b4994CE",
      token_address: "0xD9856fe34B897aC902e202184fEC3c75E31C1165",
    };
    const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log(polygonNFTs);
  };

  const login = async () => {
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  return (
    <Container fluid>
      <button onClick={login}>Connect Wallet</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buy" element={<BuyNft />}></Route>
        <Route path="/sell" element={<SellNft />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
