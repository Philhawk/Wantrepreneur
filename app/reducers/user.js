import axios from 'axios';

// ACTIONS

const CREATE_USER = 'CREATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGIN_USER = 'LOGIN_USER';

// ACTION CREATORS
const signup = user => ({type:CREATE_USER, user});
const logout = () => ({type:LOGOUT_USER});
const login = user => ({type: LOGIN_USER, user});


//reducer
const reducer = (user = null, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case LOGIN_USER :
      return action.user;
    case LOGOUT_USER :
      return null;
    default: return user;

  }
};

//DISPATCHERS
export const signUpUser = (user) => dispatch => {
  axios.post('/api/register', user)
  .then(res => dispatch(signup(res.data)))
  .catch(err => console.log(err));

};

export const loginUser = (user) => dispatch => {
  axios.post('/api/auth/local/login', user)
  .then(res => {
    window.localStorage.setItem('user', JSON.stringify(user));
    dispatch(login(res.data));
  })
  .catch(err => {
    console.log(err);
  });

};

export const logoutUser = (user) => dispatch => {
  axios.post('/api/logout')
  .then(res => {
    window.localStorage.setItem('user', '');
    dispatch(logout());
  })
  .catch(err => console.log(err));
};


export default reducer;
