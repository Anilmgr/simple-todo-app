import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({addTodo}) {
    const [text,setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    const handleSubmit = () => {
        addTodo(text)
        setText('');
    }

  return (
    <View>
        <TextInput style={styles.txtInput} placeholder='Enter your todo...'onChangeText={changeHandler} value={text}/>   
        <Button title='Add Todo' onPress={handleSubmit} />
    </View>
  )
}


const styles = StyleSheet.create({
  txtInput:{
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 25,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
  },
});