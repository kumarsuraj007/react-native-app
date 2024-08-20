import { View, Text, Pressable, FlatList, ImageBackground } from "react-native";
import React from "react";
import { MEDITATION_DATA } from "@/constants/Meditation-data";
import images from "@/constants/Meditation-images";
import AppGradient from "@/components/AppGradient";
import { LinearGradient } from "expo-linear-gradient";

type ImageKeys =
  | "tree"
  | "river"
  | "underTree"
  | "beach"
  | "stars"
  | "waterfall";

const natureMeditate = () => {
  const imageKeys: ImageKeys[] = [
    "tree",
    "river",
    "underTree",
    "beach",
    "stars",
    "waterfall",
  ];

  return (
    <View className="flex-1">
      <AppGradient colors={["#1A3636", "#40534C", "#677D6A"]}>
        <View className="mb-6 mt-5">
          <Text className="text-gray-200 text-4xl mb-1 font-bold text-left">
            Welcome Suraj
          </Text>
          <Text className="text-gray-400 text-xl font-medium text-left">
            Start your meditation journey today!
          </Text>
        </View>
        <View>
          <FlatList
          className="mb-28"
            data={MEDITATION_DATA}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            renderItem={({ item, index }: any) => (
              <Pressable
                className={`h-48 my-3 rounded-md overflow-hidden`}
                onPress={() => console.log("press")}
              >
                <ImageBackground
                  source={images[imageKeys[item.id - 1] as ImageKeys]}
                  resizeMode="cover"
                  style={{ flex: 1 }}
                  className="rounded-md justify-center items-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center w-full"
                  >
                    <Text className="text-white text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
    </View>
  );
};

export default natureMeditate;