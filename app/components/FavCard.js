import React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../../NavigationRoot";
import { deleteFav } from "../redux/ActionCreator";


const FavCard = ({ item }) => {
 const dispatch = useDispatch();
const states = useSelector(state=>state.bookStates)
 const goDetails = () =>{
  navigate("Book Details", {book:item});
 }

 const deleteFavourite = () =>{
    Alert.alert("Are you sure?",
    "Wana delete " + item.name + " from favourites?",
    [
        {
          text:"Cancel",
          onPress:()=>console.log("canceled"),
          style:"cancel"
        },
        {
         text:"Ok",
         onPress:()=>dispatch(deleteFav(states.userId,item.key))
        }
    ],
    {cancelable:false}
    )
   
 }


  return (
    <TouchableOpacity onLongPress={()=>deleteFavourite()} onPress={()=>goDetails()}>

    <View style={styles.card}>
      <Image source={{uri:item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical:10,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 10,
  },
  details: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 500,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
    textAlign:"center",
    fontWeight:"600"
  },
});

export default FavCard;
