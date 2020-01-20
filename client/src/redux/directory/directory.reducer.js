import DIRECTORY_DATA from "database/directory";

const INITIAL_DATA = {
  collection: DIRECTORY_DATA
};

const directoryReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
