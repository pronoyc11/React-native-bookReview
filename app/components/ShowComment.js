import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShowComment = ({ comments }) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentor}>{comments.commentorName} say's</Text>
      <Text style={styles.comment}>{comments.comment}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  commentor: {
    fontSize: 25,
    marginVertical: 5,
    textAlign: "center",
  },
  comment: {
    fontSize: 15,
    marginVertical: 5,
    fontWeight: "300",
    textAlign: "center",
  },
  commentContainer: {
    borderRadius: 5,
    margin: 5,
    elevation: 5,
    paddingVertical:10
  },
});
export default ShowComment;
