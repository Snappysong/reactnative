import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Song');
  const [age, setAge] = useState('30');

  const clickHandler = () => {
    if (name === 'Song'){
      setName('Subzero')
    }
    if (name === 'Subzero'){
      setName('Song')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>This is my<Text> test </Text> Text component</Text>
        <Text>This is my Text component</Text>


        <Text>This is my name, {name}.</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={clickHandler} />
        </View>

        <Text>name: {name}, age: {age}</Text>
        <Text>Enter name:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder='e.g. John Doe'
          onChangeText={(value) => setName(value)} />
        <Text>Enter age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g. 99'
          onChangeText={(value) => setAge(value)} />
      </View>    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  }, 
  body: {
    backgroundColor: 'yellow',
    padding: 30,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
