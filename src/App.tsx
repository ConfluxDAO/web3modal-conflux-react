import React from "react";
import logo from "./logo.png";
import "./App.css";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import ConnectButton from "./ConnectWalletBtn";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Demo</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Using WalletConnect on Conflux eSpace Dapp
        </p>
        <ConnectButton />
      </header>
    </div>
  );
}

export default App;
