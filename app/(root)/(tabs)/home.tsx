import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  return (
    <>
      <SafeAreaView>
        <Text className="text-red-500 underline">Home</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
