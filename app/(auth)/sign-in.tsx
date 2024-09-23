import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const SignIn = () => {
  return (
    <>
      <SafeAreaView>
        <Text className="text-red-500 underline">SignIn</Text>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
