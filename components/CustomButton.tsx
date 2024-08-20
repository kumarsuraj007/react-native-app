import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  title,
  textStyles,
  containerStyles,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`bg-white rounded-xl min-h-[62px] flex items-center justify-center ${containerStyles}`}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
