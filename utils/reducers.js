import { SHOW_SIDEBAR, HIDE_SIDEBAR } from './actions';

const initialState = {
  sidebarVisible: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        sidebarVisible: true,
      };
    case HIDE_SIDEBAR:
      return {
        ...state,
        sidebarVisible: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;