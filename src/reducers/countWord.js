import {
  // COUNTGENERAL,
  // COUNTSPECIALIZED,
  // COUNTNAATI
  COUNTWORD
} from "../actions/countWord";

const initialState = {
  totalWords: 0,
  priceGeneral: 0,
  priceSpecialized: 0,
  priceNaati: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTWORD:
      return {
        totalWords: state.totalWords,
        priceGeneral: state.totalWords * 0.11,
        priceSpecialized: state.totalWords * 0.14,
        priceNaati: state.totalWords * 0.17
      };
    default:
      return state;
  }
};
