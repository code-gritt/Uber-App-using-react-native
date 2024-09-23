import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Profile = () => {
  return (
    <>
      <SafeAreaView>
        <Text className="text-red-500 underline">Profile</Text>
      </SafeAreaView>
    </>
  );
};

export default Profile;
