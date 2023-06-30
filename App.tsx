import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Caio" />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
