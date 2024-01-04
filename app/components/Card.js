import React from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { navigate } from "../../NavigationRoot";


const Card = ({ item }) => {
 const dispatch = useDispatch();

 const goDetails = () =>{
  navigate("Book Details", {book:item});
 }
 


  return (
    <TouchableOpacity onPress={()=>goDetails()}>

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

export default Card;
