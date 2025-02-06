import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Todo({item, deleteTodo}) {

    const handleDelete = () => {
        Alert.alert('Delete Todo', 'Are you sure you want to delete this todo?', [
            {text: 'Yes', onPress: ()=>deleteTodo(item.id)},
            {text: 'No'}
        ])
    }
  return (
    <TouchableOpacity style={styles.todoItem}>
        <Text>{item.todo}</Text>
        <MaterialIcons name="delete" size={24} color="black" onPress={handleDelete} />   
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem:{
    padding: 10,
    margin: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});