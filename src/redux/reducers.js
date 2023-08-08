// const initialState = {
//   sidebarOpen: true,
// };

// const appReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "TOGGLE_SIDEBAR":
//       return {
//         ...state,
//         sidebarOpen: !state.sidebarOpen,
//       };
//     default:
//       return state;
//   }
// };

// export default appReducer;
const initialState = {
  positions: [],
};

const positionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSITIONS":
      return {
        ...state,
        positions: action.payload,
      };
    default:
      return state;
  }
};

export default positionsReducer;
