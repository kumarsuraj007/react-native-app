import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import images from "@/constants/Meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter() as any;
  return (
    <View className="flex-1">
      <ImageBackground
        source={images.beach}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-white text-3xl font-bold text-center">
                MEDO-MEDITATION APP
              </Text>
              <Text className="text-gray-300 text-lg font-bold text-center">
                app for your mind and body
              </Text>
            </View>
            <CustomButton
              title="Get Started"
              textStyles="text-black"
              onPress={() => router.push("/nature-meditate")}
            />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
