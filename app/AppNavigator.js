import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryScreen from "./screens/CategoryScreen";
import BooksScreen from "./screens/BooksScreen";
import AuthScreen from "./screens/AuthScreen";
import { AntDesign } from "@expo/vector-icons";
import FavouriteScreen from "./screens/FavouriteScreen";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "../NavigationRoot";
import { clearAllState } from "./redux/SliceCreator";
import { Text, TouchableOpacity } from "react-native";
import BookDetailsScreen from "./screens/BookDetailsScreen";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BookStack = () => {

  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon:({color,size})=>{
return <Entypo name="book" size={size} color={color} />
          },
          tabBarLabel:"Books category",
          tabBarLabelStyle:{fontSize:13},
          
         
        }}
      />
      <Tab.Screen name="Favourites" component={FavouriteScreen}         options={{
          tabBarIcon:({color,size})=>{
return <AntDesign name="hearto" size={size} color={color} />
          },
          tabBarLabelStyle:{fontSize:13},
        }} />
    </Tab.Navigator>
  );






};

const AppNavigator = () => {
  
  const token = useSelector((state) => state.bookStates.token);
  const category = useSelector((state) => state.bookStates.category);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator >
      <Stack.Screen name="Books" component={BookStack} options={{
          headerRight: () => {
            return (
              <TouchableOpacity   style={{ marginRight: 20 }}
              onPress={() => {
                dispatch(clearAllState());
                navigate("Log in");
              }}>
              <Text style={{fontSize:20,textShadowRadius:3}}>
{token !== null ? "Log out  " : "Log in  " }
                <Entypo
                  name={token !== null ? "log-out" : "login"}
                  size={26}
                  color={token !== null ? "#de0a26" : "blue"}
                />
              </Text>
              </TouchableOpacity>
            );
          },
        }} />
      <Stack.Screen name="Log in" component={AuthScreen}  />
      <Stack.Screen name="allBooks" component={BooksScreen} options={{
        headerTitle:category + " Books",
      }} />
      <Stack.Screen name="Book Details" component={BookDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
