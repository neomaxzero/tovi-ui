import {fromJS} from 'immutable';

/**
 * This method use immutable to restore the previos based on local storage
 * We may need redux-localstorage-immutable
 */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }

    let deserializeData = JSON.parse(serializedState);
    //If user checks for rememberme we restore the session if not we don't do anything
    if(deserializeData.Login.loginInfo.rememberme) {
      for(let key in deserializeData) {
        //We must used with immutableJS to restore the state of the user session
        deserializeData[key] = fromJS(deserializeData[key]);
      }
      return deserializeData;
    }
  } catch (error) {
    //Loggin just in case, we may need a flag for production
    console.error(error);
  }
}

/**
 * Save the state in localStorage
 * @param {*object} state 
 */
export const saveState = (state) => {
  try {
    //We set to string the state, we must be carefull to not save a bigger store
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {
    //Login just in case of an error, we must check if it is production
    console.error(error);
  }
}