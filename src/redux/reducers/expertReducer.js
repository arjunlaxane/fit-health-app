import { ActionTypes } from '../constants/action-types';

const initialState = {
  expert: [],
};

export const expertsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EXPERTS:
      return { ...state, expert: payload };

    default:
      return state;
  }
};

export const selectedExpertReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_EXPERT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_EXPERT:
      return {};

    default:
      return state;
  }
};

//home

const initialHomeState = {
  homeexpert: [],
};

export const homeExpertReducers = (
  state = initialHomeState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.HOME_EXPERTS:
      return { ...state, homeexpert: payload };
    // case ActionTypes.REMOVE_HOME_EXPERTS:
    // return {};
    default:
      return state;
  }
};
