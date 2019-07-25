import React from "react";
import imageHeader from "./../images/appusage.jpg";
import "./../css/site.css";
function OpenTimeDeposit() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-left imageHeader headerBorder">
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <h1 className="text-white">Open An Account</h1>
          <h3 className="text-white">Account Details</h3>
        </div>
        <div className="col-md-12 text-left">
          <h2>Source Account</h2>
        </div>
      </div>
      <div className="row text-left">
        <div className="col-md-2 col-3 ">
          <div className=" iconBackground text-center">
            <i class="fa fa-money" />
          </div>
        </div>
        <div className="col-md-10 col shadow">
          <h4>Savings 1</h4>
          <h6 className="text-muted">12345678</h6>
        </div>
      </div>
    </div>
  );
}

export default OpenTimeDeposit;
