import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postFav, postReview } from "../redux/ActionCreator";
import { navigate } from "../../NavigationRoot";

const WriteReview = ({ book }) => {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const states = useSelector((state) => state.bookStates);

  const submitReview = () => {
  if(comment === ""){
alert("Write something!")
  }else{
    const obj = {
        commentorName: states.name,
        comment: comment,
        key: Date.now() * Math.random(),
      };
      dispatch(postReview(book.name, obj));
      setComment("");
  }
  };
  let isFav = states.favourites.some(item=> item.key === book.key);

  const submitFav = () =>{
    if(isFav){
     alert("Already is in the favourite list!")
    }else{
        dispatch(postFav(states.userId,book))
    }
  }

  return (
    <View style={styles.writeReviewContainer}>
      {states.token ? (
        <View>
          <TextInput
            placeholder="Write a review"
            value={comment}
            onChangeText={(text) => {
              setComment(text);
            }}
            style={styles.input}
          />
          <Button
            title="Write a review"
            onPress={() => {
              submitReview();
            }}
          />
          <Text style={{textAlign:"center",marginVertical:10,fontWeight:"400"}}>Or,</Text>
          <Button
            title="add to favourites"
            onPress={() => {
              submitFav()
            }}
            color={"orange"}
          />
        </View>
      ) : (
        <View>

        <Text style={{ fontWeight: "300", opacity: 0.5,textAlign:"center",marginBottom:5 }}>
          Please Log in to write a review
        </Text>
        <Button title="Log in" onPress={()=>{
            navigate("Log in");
        }}/>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  writeReviewContainer: {
    borderWidth: 1,
    marginTop: 10,
    padding: 15,
    borderRadius: 15,

  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
});

export default WriteReview;
