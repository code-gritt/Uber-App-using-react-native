import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import { Redirect } from "expo-router";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Home = () => {
  return (
    <>
      <Redirect href="/(auth)/welcome" />;
    </>
  );
};

export default Home;
