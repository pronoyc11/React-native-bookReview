import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchFav } from "../redux/ActionCreator";
import FavCard from "../components/FavCard";
import { useIsFocused } from "@react-navigation/native";

const FavouriteScreen = () => {
  const states = useSelector((state) => state.bookStates);
  const dispatch = useDispatch();
 const isFocused = useIsFocused()
  useEffect(() => {
    dispatch(fetchFav(states.userId));
  }, [isFocused]);
  return (
    <View>
      {states.favourites.length > 0 ? (
        <FlatList
          data={states.favourites}
          renderItem={({ item }) => <FavCard item={item} key={item.key} />}
          keyExtractor={(item) => item.key}
        />
      ) : (
        <Text style={{ textAlign: "center", margin: 10, opacity: 0.5 }}>
          No favourites added,log in to add.
        </Text>
      )}
    </View>
  );
};

export default FavouriteScreen;
