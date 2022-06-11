import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

import pic1 from "./img/1.png";
import pic2 from "./img/2.png";
import pic3 from "./img/3.png";
import pic4 from "./img/4.png";
import pic5 from "./img/5.png";
import pic6 from "./img/6.png";

class Xucsac extends Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        <div className="xucsac">
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
        </div>
        <h3>
          KET QUA:{" "}
          <span
            style={{ fontSize: "30px", color: "red", letterSpacing: "2px" }}
          >
            {result}
          </span>
        </h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    result: state.taixiu.result,
  };
};
export default connect(mapStateToProps)(Xucsac);
