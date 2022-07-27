import { ActionTypes } from '../constants/action-types';

export const setExperts = expert => {
  return {
    type: ActionTypes.SET_EXPERTS,
    payload: expert,
  };
};
export const homeExperts = homeexpert => {
  return {
    type: ActionTypes.HOME_EXPERTS,
    payload: homeexpert,
  };
};

export const removeHomeExperts = () => {
  return {
    type: ActionTypes.REMOVE_HOME_EXPERTS,
  };
};

export const selectedExpert = expert => {
  return {
    type: ActionTypes.SELECTED_EXPERT,
    payload: expert,
  };
};

export const removeSelectedExpert = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_EXPERT,
  };
};
