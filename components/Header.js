import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTxt}>Todo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'darkblue',
        padding: 20,
    },
    headerTxt:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
  })