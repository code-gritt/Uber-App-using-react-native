import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const SignUp = () => {
  return (
    <>
      <SafeAreaView>
        <Text className="text-red-500 underline">SignUp</Text>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
