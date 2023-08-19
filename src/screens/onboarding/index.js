import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  Dimensions,
} from "react-native";
import { Touchable } from "components";
import routes from "navigation/routes";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    image: require("../../assets/images/boarding-1.png"),
    title: "Driip yourself into another world",
    text: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod .`,
  },
  {
    id: "2",
    image: require("../../assets/images/boarding-2.png"),
    title: "Driip yourself into another world",
    text: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod .`,
  },
  {
    id: "3",
    image: require("../../assets/images/boarding-1.png"),
    title: "Driip yourself into another world",
    text: `Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod .`,
  },
];

export default function OnBoardingScreen({ navigation }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.navigate(routes.AUTH_LOGIN);
    }
  };

  const skip = () => {
    navigation.navigate(routes.AUTH_LOGIN);
  };

  const Dots = () => {
    return (
      <View className="flex-row items-center gap-x-[10px]">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`rounded-full h-3 w-3 bg-[#D9D9D9] ${
              currentSlideIndex == index ? " bg-secondary-700 w-[25px]" : ""
            }`}
          />
        ))}
      </View>
    );
  };

  const Slide = ({ data }) => {
    return (
      <View
        className="flex-1 items-center justify-center px-6"
        style={{ width }}
      >
        <View className="w-full items-center justify-center">
          <Image
            source={data?.image}
            style={{
              resizeMode: "contain",
              width: width,
              marginBottom: 30,
            }}
          />
        </View>
        <Text className="font-Bold text-black-900 text-[18px] mb-[20px] text-center">
          {data?.title}
        </Text>
        <Text className="font-Regular text-black-600 text-[15px] text-center">
          {data?.text}
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View
        className="px-6 justify-between items-center"
        style={{
          height: height * 0.16,
        }}
      >
        <Dots />
        <View className="w-full py-6 flex-row items-center justify-between ">
          <Touchable onPress={skip}>
            <Text className="font-SemiBold text-[14px] text-black-900 py-2">
              Skip
            </Text>
          </Touchable>
          <Touchable
            className="bg-black-900 rounded-[20px]"
            onPress={goToNextSlide}
          >
            <Text className="font-SemiBold text-[14px] text-white py-2 px-5">
              Next
            </Text>
          </Touchable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.84 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide data={item} width={width} />}
      />
      <Footer />
    </SafeAreaView>
  );
}
