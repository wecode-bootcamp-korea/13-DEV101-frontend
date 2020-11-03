import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/reset.scss";

console.log(`  
  ███████   ███████╗ ██║       ██║    ██╗     ██████╗      ██╗
  ██╔═══██  ██║════╝  ██║     ██║    ███║    ██╔═████╗    ███║
  ██║   ██║ ███████║   ██║   ██║     ╚██║    ██║██╔██║    ╚██║
  ██║   ██║ ██║════╝    ██║ ██║       ██║    ████╔╝██║     ██║
  ███████ ╝ ███████╗      ██║         ██║    ╚██████╔╝     ██║
    ╚════╝  ╚══════╝      ╚═╝         ╚═╝     ╚═════╝      ╚═╝
                                                              `);

ReactDOM.render(<Routes />, document.getElementById("root"));
