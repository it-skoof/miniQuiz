import { createRoot } from "react-dom/client";
import { App } from "./App";


const root = document.querySelector('#root') as Element;
const react = createRoot(root);
react.render(<><App/></>) 