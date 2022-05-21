import React from "react";
import "./Payement.Module.css";
import { GrLinkNext } from "react-icons/gr";
const Paymentcard = ({ tdate, tlogo, type, pay, gift, casest }) => {
  return (
    <div className="PaymentCardMain">
      <div className="PaymentCardSubMain">
        <div className="PaymentCardDatelogo">
          <div className="PaymentCardDate">{tdate}</div>
          <div className="PaymentCardlogo">{tlogo}</div>
        </div>
        <div className="PaymentCardCasestudy">{casest}</div>
        <div className="PaymentCardGift">{gift}</div>
        <div className="PaymentCardPay">{pay}</div>
        <div className="PaymentCardTypeNext">
          <div className="PaymentCardType">{type}</div>
          <div className="PaymentCardNext">
            <GrLinkNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paymentcard;
