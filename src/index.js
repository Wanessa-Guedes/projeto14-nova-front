import ReactDom from "react-dom";

import App from "./Components/App";
import "./../src/Assets/css/reset.css";
import "./../src/Assets/css/style.css";

ReactDom.render(<App />, document.querySelector(".root"));