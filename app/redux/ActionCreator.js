import axios from "axios";
import { navigate } from "../../NavigationRoot";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../BaseUrl";
import { addAllBooks, addFav, addReview, delFav, loadFav, loadReviews } from "./SliceCreator";

//AUTHENTICATION STARTS
export const authUser = createAsyncThunk("authUser", async (authObj) => {
    let url = "";
    const API = "AIzaSyDE5LWF6VmWSvbB5YpvTOODNSMu3KyoK-g";
    if (authObj.mode === "signup") {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    try {
      const response = await axios.post(url + API, authObj.user);
      
      const data = await response.data;
     
      navigate("Category");
      return data;
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  });
  //AUTHENTICATION ENDS

  //Fetching books start
  export const fetchBooks = category => dispatch =>{
    axios.get(baseUrl+category+".json")
         .then(response=> response.data)
         .then(data=> dispatch(addAllBooks(data)))
         .catch(error=>console.log(error));
  } 
  //Fetching books end

//Fetching Reviews Start 
export const fetchReviews = (bookName) => dispatch =>{
  axios.get(baseUrl+bookName+".json")
       .then(response=>response.data)
       .then(data=>{
        let reviewsArr = []
        for(let keys in data){
    reviewsArr.push({...data[keys],key:keys});
        }
        dispatch(loadReviews(reviewsArr));
       } )
        .catch(error=>console.log(error));
}
//Fetching Reviews End
//Post review start
export const postReview = (bookName,obj) => dispatch =>{
  axios.post(baseUrl + bookName + ".json",obj)
       .then(response=>{
        if(response.status === 200){
          dispatch(addReview(obj));
        }
       })
       .catch(error=>console.log(error));
} 
//Post review end
//Post favourites start
export const fetchFav = userId => dispatch =>{
  axios.get(baseUrl+userId+".json")
       .then(response=>{
        let favArr = [];
    
     
        for(let keys in response.data){
          favArr.push({...response.data[keys],key:keys})
        }
     
        dispatch(loadFav(favArr));
       })
       .catch(error=>console.log(error));
} 
//Post favourites end
//add Fav start
export const postFav = (userId,book) => dispatch =>{
  axios.post(baseUrl+userId+".json",book)
       .then(response=>{
          if(response.status === 200){
            dispatch(addFav({...book,key:response.data.name}))
            navigate("Favourites");
          }
       })
       .catch(error=>console.log(error));
}  
//add Fav end
//delete Fav starts
export const deleteFav = (userId,key) => dispatch =>{
  axios.delete(baseUrl+userId+"/"+key+".json")
       .then(response=>{
      
          dispatch(delFav(key));
   
       })
       .catch(error=>console.log(error));
} 
//delete Fav ends