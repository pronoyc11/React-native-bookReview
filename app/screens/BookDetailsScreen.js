import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "../redux/SliceCreator";

import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import { fetchReviews } from "../redux/ActionCreator";
import ShowComment from "../components/ShowComment";
import WriteReview from "../components/WriteReview";

const BookDetailsScreen = (props) => {
  const book = props.route.params.book;
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.bookStates.reviews);

  useEffect(() => {
    dispatch(fetchReviews(book.name));
  }, []);

  //const favourites = useSelector((state) => state.favourites);

  //marking as fav starts
  // let isFav = favourites.some(item=> item.id === dish.id);
  //    const markFavourites = dish =>{

  // if(isFav){
  //   alert("Already is in the favourite list!")
  // }else{
  //   dispatch(addFav(dish));
  // }
  //    }
  //marking as fav ends
  //making the icon dynamic starts
  //    let favIcon = "hearto"
  //    if(isFav){
  //     favIcon = "heart"
  //    }else{
  //     favIcon = "hearto"
  //    }
  //making the icon dynamic ends

  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <Image source={{ uri: book.image }} style={styles.image} />

        <View style={styles.details}>
          <Text style={styles.text}>{book.name}</Text>

          <Text style={styles.nrmlTextWritter}>{book.writter}</Text>
          <Text
            style={{
              ...styles.nrmlTextWritter,
              fontWeight: "300",
              borderWidth: 1,
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            Online price:{book.price}$
          </Text>
          <Text style={styles.nrmlText}>{book.description}</Text>
        </View>
        <View style={styles.reviewContainer}>
          {reviews.length > 0 ? (
reviews.map(item=> <ShowComment comments={item} key={item.key} />)
          ) : (
            <Text style={{ fontWeight: "300", opacity: 0.5,textAlign:"center" }}>
              No reviews yet!Log in to write a review.
            </Text>
          )}

          <WriteReview book={book} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: "column",
    gap: 10,
  },
  image: {
    height: 600,
    width: "100%",
  },
  text: {
    fontSize: 37,
    textAlign: "center",
  },
  nrmlTextWritter: {
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
  },
  nrmlText: {
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
  },
  reviewContainer: {
    borderTopWidth: 1,
    paddingVertical: 10,
  },
});
export default BookDetailsScreen;
