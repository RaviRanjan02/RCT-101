import logo from "./logo.svg";
import "./App.css";
import Paymentcard from "./components/Paymentcard";
import { BsApple } from "react-icons/bs";
import { GrAmazon } from "react-icons/gr";
import PaymentCard2 from "./components/PaymentCard2";

const tdate = "28/10/2020";
const tlogo = "a";
const type = "Desktop-Mobile";
const pay = "Pay";
const gift = "Amazon Gift";
const casest = "Case Study";

function App() {
  return (
    <div className="App" >
      <Paymentcard
        tdate={tdate}
        tlogo={<GrAmazon/>}
        type={type}
        pay={pay}
        gift={gift}
        casest={casest}
      />
      <PaymentCard2
        tdate={"17 Sep 2020"}
        tlogo={<BsApple/>}
        type={"Mac Os-Mobile"}
        pay={"Payment"}
        gift={"Apple Gift"}
        casest={casest}

      />
    </div>
  );
}

export default App;
