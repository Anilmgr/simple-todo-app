import { useState } from "react";
import {
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (todo.trim().length === 0) {
            Alert.alert("No todo?", "Please enter a todo!", [{ text: "OK" }]);
        } else {
            setTodos((prevTodos) => {
                return [
                    { id: uuidv4(), todo: todo, completed: false },
                    ...prevTodos,
                ];
            });
        }
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo addTodo={addTodo} />
                    <FlatList
                        style={styles.todoList}
                        keyExtractor={(item, index) => index.toString()}
                        data={todos}
                        renderItem={({ item }) => (
                            <Todo item={item} deleteTodo={deleteTodo} />
                        )}
                    />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    todoList: {
        marginTop: 20,
        flex: 1,
    },
    content: {
        padding: 20,
        flex: 1,
    },
});
