import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REGISTER = "REGISTER";
export const REGISTER_FAIL = "REGISTER_FAIL"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const GET_KWEETS = "GET_KWEETS"
export const LOGOUT_USER = "LOGOUT_USER";

const url = domain + "/auth";

//login action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGIN_FAIL, payload: err.message })
      );
    });
};
export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData)).then(() => dispatch(push("/profile")));
};

//upload image actions
export const UPLOAD_IMAGE = "UPLOAD_IMAGE"
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
//register actions
export const register = registerData => dispatch => {
  // dispatch here before fetch
  dispatch({
    type: REGISTER
  });

  fetch(url + "/register" , {
  // fetch("https://kwitter-api.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      dispatch({
        type: REGISTER_SUCCESS,
        register: data,
        result: "Successfully Registered!"
      });

      async function fixTheRoute() {
        await dispatch(
          login({
            username: registerData.username,
            password: registerData.password
          })
          )
          .then(() => dispatch(push("/profile")))
      }
      fixTheRoute();

    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: REGISTER_FAIL,
        result: "Failed to Register!"
      });
    });
};
//logout
export const logoutUser = () => dispatch => {
  console.log('fire')
  dispatch(logoutCurrentUser())
  dispatch(push("/"))
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_USER
  }
}
export const posKweet = text => (dispatch, getState) => {
  const token = getState().loginData.token;
 fetch(url + "/login", {
    method: "POST",
    headers: {jsonHeaders,
      Authorization: "Bearer" + token},
    body: JSON.stringify({text: text})
  })
      .then(response => response.json())
      .then(kweet => {
        dispatch(fetchKweets());
        // dispatch({type: _____})
      });
  };

  export const fetchKweets = () => dispatch => {
    fetch(url + "/kweets?limit=10")
    // fetch("https://kwitter-api.herokuapp.com/messages?limit=10")
      .then(response => response.json())
      .then(data => {
        dispatch(getKweets(data.kweets));
      });
  };
  
  export const getKweets = kweets => {
    return {
      type: GET_KWEETS,
      kweets
    };
  };

