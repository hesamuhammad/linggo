const initialState = {
  wordCount: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORD":
      return {
        wordCount: action.payload
        // data: action.payload
      };
    case "GET_WORD_COUNT":
      let data = {
        jumlahKata: action.jumlahKata,
        hargaTotal: action.hargaTotal
      };
      console.log("data data data");
      return {
        wordCount: data
        // data: action.payload
      };

    default:
      return state || [];
  }
};

export default reducer;
