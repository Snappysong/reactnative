import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from'./components/header'
import TodoItem from './components/todoItem';
import Addtodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'pay bills', key: '2' },
    { text: 'apply to jobs', key: '3' },
    { text: 'do dishes', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(key)
      return prevTodos.filter(todo => todo.key != key);
    })
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() }, //this is not great.
          ...prevTodos, 
        ]
      })  
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 chars long.', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Addtodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});