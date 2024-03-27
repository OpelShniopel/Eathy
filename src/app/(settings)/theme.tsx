import React from "react";
import { View, Text } from "react-native";
import { useColorScheme } from "nativewind";

import ThemeSwitch from "@/components/ThemeSwitch";

const Theme = () => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-black dark:text-white text-2xl font-bold mb-8">
        Theme
      </Text>
      <ThemeSwitch
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      />
    </View>
  );
};

export default Theme;
