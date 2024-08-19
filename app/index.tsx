import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import images from "@/constants/Meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={images.beach}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1"
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView className="flex-1 px-1 py-10 justify-between">
            <View>
              <Text className="text-white text-3xl font-bold text-center">
                MEDO-MEDITATION APP
              </Text>
              <Text className="text-gray-300 text-lg font-bold text-center">
                app for your mind and body
              </Text>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
