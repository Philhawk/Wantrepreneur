import axios from "axios";

// ACTIONS

const CREATE_USER = "CREATE_USER";

// ACTION CREATORS
const signup = user => ({type:CREATE_USER, user});


//reducer
const reducer = (user = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    default: return user;

  }
};

//DISPATCHERS
export const signUpUser =(user) => dispatch => {

  console.log(user);
  axios.post('/api/register', user)
  .then(res=>dispatch(signup(res.data)) )
  .catch();

};

export default reducer;
