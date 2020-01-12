import ReactDOM from "react-dom";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faSearch,
  faSpinner,
  faCircleNotch,
  faUserCircle,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import Routes from "./Route";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faSearch,
  faSpinner,
  faCircleNotch,
  faUserCircle,
  faUserPlus,
  faGoogle
);

ReactDOM.render(Routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
