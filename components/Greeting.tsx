import React from "react";
import { Text, View } from "react-native";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <View>
      <Text>Howdy {name}!</Text>
    </View>
  );
};

export default Greeting;
