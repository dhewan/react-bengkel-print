
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ColorSchemesExample from './component/homepage';
import "bootstrap/dist/css/bootstrap.css"
import Dashboard from "./component/dashboard";
import LineDemo from "./component/chart";
import Table from "./component/table";

function App() {
  return (
    <div  class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColorSchemesExample/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/chart" element={<LineDemo/>}/>
          <Route path="/table" element={<Table/>}/>
        {/* <Route path="/dashboard" element={<Login/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
