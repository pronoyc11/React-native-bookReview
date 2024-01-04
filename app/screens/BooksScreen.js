import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../redux/ActionCreator';
import Card from '../components/Card';

const BooksScreen = () => {

  const dispatch = useDispatch();
  const states = useSelector(state => state.bookStates);


  useEffect(()=>{
dispatch(fetchBooks(states.category));
  },[]);
  return (
    <View>
        <FlatList
        data={states.allBooks}
        renderItem={({item})=><Card item={item} key={item.id} />}
        keyExtractor={item=>item.id}
        />
        </View>

  )
}

export default BooksScreen