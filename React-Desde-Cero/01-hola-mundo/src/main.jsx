import ReactDom from "react-dom/client"
import './index.css'
import './App.css'
import App from "./App.jsx";

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <App/>
)