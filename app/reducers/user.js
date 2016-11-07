import axios from "axios";

// ACTIONS

const CREATE_USER = "CREATE_USER";

// ACTION CREATORS
const signup = user => ({type:CREATE_USER, user});


//reducer
const reducer = (user = null, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    default: return user;

  }
};

//DISPATCHERS
export const signUpUser =(user) => dispatch => {
  axios.post('/api/register', user)
  .then(res=>dispatch(signup(res.data)))
  .catch(err => console.log(err));

};


export const loginUser = (user) => dispatch => {
  axios.post('/api/auth/local/login', user)
  .then(res => dispatch(login(res.data)))
  .catch(err=>console.log(err));

};

export const logoutUser = (user) => dispatch => {
  axios.post('/api/logout')
  .then(res => dispatch(logout()))
  .catch(err=>console.log(err));
};


export default reducer;
