import React, { Component } from "react";
import style from "../game/Game.css";
import { connect } from "react-redux";
import Xucsac from "./xucsac";

class Game extends Component {
  handlePlay = () => {
    this.props.onPlayGame(this.props.choice);
  };
  handleCLickTai = () => {
    this.props.onClickTai();
  };
  handleCLickXiu = () => {
    this.props.onClickXiu();
  };

  render() {
    const { totalPlay, totalWin, onClickXiu, choice } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>GAME DO XUC SAC</h1>
            <div className="item">
              <button className="tai btn-xs" onClick={this.handleCLickTai}>
                TAI
              </button>
              <Xucsac></Xucsac>
              <button className="xiu btn-xs" onClick={this.handleCLickXiu}>
                XIU
              </button>
            </div>
            <h3>
              Ban chon:{" "}
              <span
                style={{ fontSize: "24px", color: "red", letterSpacing: "2px" }}
              >
                {choice}
              </span>
            </h3>
            <h3>
              So ban thang:{" "}
              <span
                style={{
                  fontSize: "24px",
                  color: "#55d055",
                  letterSpacing: "2px",
                }}
              >
                {" "}
                {totalWin}
              </span>
            </h3>
            <h3>
              Tong so ban choi:{" "}
              <span
                style={{
                  fontSize: "24px",
                  color: "#1ed3bd",
                  letterSpacing: "2px",
                }}
              >
                {totalPlay}
              </span>{" "}
            </h3>
            <button className="btn-play" onClick={this.handlePlay}>
              Play game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    choice: state.taixiu.choice,
    totalWin: state.taixiu.totalWin,
    totalPlay: state.taixiu.totalPlay,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPlayGame: (bet) => {
      const action = { type: "PLAY_GAME", bet };
      dispatch(action);
    },
    onClickTai: () => {
      const action = { type: "TAI" };
      dispatch(action);
    },
    onClickXiu: () => {
      const action = { type: "XIU" };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
