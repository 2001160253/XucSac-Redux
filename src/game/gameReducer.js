const game = {
  choice: "Chua chon", //TAI: 11-17 -- XIU: 4-10
  totalWin: 0,
  totalPlay: 0,
  result: "",
};

const gameReducer = (state = game, action) => {
  switch (action.type) {
    case "PLAY_GAME": {
      const xs1 = Math.floor(Math.random() * 6) + 1;
      const xs2 = Math.floor(Math.random() * 6) + 1;
      const xs3 = Math.floor(Math.random() * 6) + 1;

      const total = xs1 + xs2 + xs3;

      const totalPlay = state.totalPlay + 1;

      if (action.bet !== "TAI" && action.bet !== "XIU") {
        alert("Vui long dat cuoc");
        return state;
      }

      alert(total);

      if (11 <= total && total <= 17) {
        if (action.bet === "TAI") {
          const totalWin = state.totalWin + 1;
          const result = "TAI";
          return { ...state, totalWin, totalPlay, result };
        }
        if (action.bet !== "TAI") {
          const totalWin = state.totalWin - 1;
          const result = "TAI";
          return { ...state, totalWin, totalPlay, result };
        }
      }
      if (4 <= total && total <= 10) {
        if (action.bet === "XIU") {
          const totalWin = state.totalWin + 1;
          const result = "XIU";
          return { ...state, totalWin, totalPlay, result };
        }
        if (action.bet !== "XIU") {
          const totalWin = state.totalWin - 1;
          const result = "XIU";
          return { ...state, totalWin, totalPlay, result };
        }
      }
    }
    case "TAI": {
      return { ...state, choice: "TAI" };
    }
    case "XIU": {
      return { ...state, choice: "XIU" };
    }
    // case "BET_1":{
    //   if()
    // }
    default:
      return state;
  }
};

export default gameReducer;
