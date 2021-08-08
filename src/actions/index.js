import {
  CHANGE_APP_STATE,
} from '../constants/ActionTypes';

export const appState = value => ({ type: CHANGE_APP_STATE, payload: value })