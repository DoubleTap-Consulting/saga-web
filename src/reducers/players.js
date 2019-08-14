import {
  PLAYERS_REQUEST,
  PLAYERS_SUCCESS,
  PLAYERS_FAILURE
} from "../actions/players";

const initialState = {
  data: [],
  requesting: false,
  failure: false,
  success: false,
  errors: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function tournaments(state = initializeState(), action = {}) {
  switch (action.type) {
    case PLAYERS_REQUEST:
      return Object.assign({}, state, {
        requesting: true,
        errors: null
      });
    case PLAYERS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        requesting: false,
        errors: null,
        success: true,
        failure: false
      });
    case PLAYERS_FAILURE:
      return {
        ...state,
        data: [],
        failure: true,
        success: false,
        requesting: false,
        errors: action.error
      };
    default:
      return state;
  }
}

// TODO: implement PUBG stats
// if (this.props.profile.game === "PUBG") {
//   getSeasonStats(
//     this.props.profile.pubgId,
//     "division.bro.official.pc-2018-01"
//   ).then(data => {
//     const pubgSeasonStats = [];
//     const pubgSeasonStatsOrder = [];
//     for (const key in data) {
//       if (
//         key.includes(
//           this.props.profile.perspective_preference.toLowerCase()
//         )
//       ) {
//         pubgSeasonStatsOrder.push(key);
//         pubgSeasonStats.push(data[key]);
//       }
//     }
//     this.setState({
//       pubgSeasonStats,
//       pubgSeasonStatsOrder
//     });
//   });

//   // TODO: Finish last 10 games endpoint
//   // getLastTenGames(this.props.profile.pubgId).then(pubgLast10Games => {
//   //   this.setState({
//   //     pubgLast10Games
//   //   });
//   // });

//   getLifetimeStats(this.props.profile.pubgId).then(data => {
//     // TODO: need to be caching this and everything with game APIs
//     const pubgLifetimeStats = [];
//     const pubgLifetimeStatsOrder = [];
//     for (const key in data) {
//       if (
//         key.includes(
//           this.props.profile.perspective_preference.toLowerCase()
//         )
//       ) {
//         pubgLifetimeStatsOrder.push(key);
//         pubgLifetimeStats.push(data[key]);
//       }
//     }
//     this.setState({
//       pubgLifetimeStats,
//       pubgLifetimeStatsOrder
//     });
//   });
// } else if (this.props.profile.game === "fortnite") {
//   getPlayer(this.props.profile.fortnite_gamertag).then(data => {
//     console.log("fortnite stats", data);
//   });
// }
