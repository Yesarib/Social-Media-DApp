import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from "./context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={"bb400342b6d3daacce621f8a323c52bb"}
      activeChain={activeChain}
    >
        <StateContextProvider>
        <App />

        </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
