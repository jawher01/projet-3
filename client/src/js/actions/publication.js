import axios from "axios"
import {
  GET_PUBLICATIONS_FAILED,
  GET_PUBLICATIONS_SUCCESS,
  GET_PUBLICATIONS_LOAD,
  GET_PUBLICATION,
  EDIT_PUBLICATION
}
  from "../const/publication"



export const getAllPublications = () => async (dispatch) => {
  dispatch({ type: GET_PUBLICATIONS_LOAD })
  try {
    let result = await axios.get("http://localhost:9000/user/publication")
    dispatch({ type: GET_PUBLICATIONS_SUCCESS, payload: result.data.response })
    
  } catch (error) {
    dispatch({ type: GET_PUBLICATIONS_FAILED, payload: error })
  }
}
export const deletePublication = (id) =>async (dispatch) => {
  
  axios
    .delete(`http://localhost:9000/user/publication/${id}`)
    .then(res => dispatch(getAllPublications()))
    .catch((err) => console.log(err));
};
export const getPublication = (id) => (dispatch) => {
 axios
    .get(`http://localhost:9000/user/publication/${id}`)
    .then((res) => dispatch({ type: GET_PUBLICATION, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const postPublication = (user) => async (dispatch) => {
   axios
    .post("/user/publication", user)
     .then((res) => dispatch(getPublication()))
     .catch((err) => console.log(err));
 // try {
   // let result = await axios.post("/publication/name", user)
    //dispatch(getPublication());
  //} catch (error) {
    //console.log(error.response);
  //}
};

export const editPublication = (idPub, publication) => (dispatch) => {
  console.log({idPub, publication})
 axios
    .put(`http://localhost:9000/user/publication/${idPub}`, publication)
    .then((res) => {
      dispatch({ type: EDIT_PUBLICATION, payload: res.data.message });
    })
    .then(dispatch(getPublication(idPub)))
    .catch((err) => console.log(err));
};







