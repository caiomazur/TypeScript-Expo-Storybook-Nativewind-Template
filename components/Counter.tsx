import React, { useState } from "react";
import { View, Pressable, Text } from "react-native";

interface CounterState {
  count: number;
}

const Counter: React.FC = () => {
  const [count, setCount] = useState<CounterState>({ count: 0 });

  return (
    <View>
      <Pressable
        onPress={() => {
          setCount((prevState) => ({ count: prevState.count + 1 }));
        }}
      >
        <Text>Count {count.count}</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
