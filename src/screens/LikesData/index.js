import React from "react";
import { ScrollView, View } from "react-native";
import { AppText, Touchable } from "components";
import Item from "./Item";

const data = [
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
  {
    label: "Fashion & beauty",
    value: "fashion-and-beauty",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Business & finance",
    value: "business-and-finance",
  },
  {
    label: "Arts & culture",
    value: "arts-and-culture",
  },
  {
    label: "Technology",
    value: "technology",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Gaming",
    value: "gaming",
  },
  {
    label: "Fashion & beauty",
    value: "gaming",
  },
  {
    label: "Food",
    value: "food",
  },
  {
    label: "Business & finance",
    value: "business-and-finance",
  },
  {
    label: "Arts & culture",
    value: "arts-and-culture",
  },
  {
    label: "Technology",
    value: "technology",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Sports",
    value: "sports",
  },
];

export default function LikesData() {
  return (
    <View className="flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-8">
          <AppText className="font-Bold text-[18px] mb-2">
            What do you want to see?
          </AppText>
          <AppText className="text-[13px] text-black-500">
            Select at least 3 interests to personalize your Driipa experience.
            They will be visible on your profile.
          </AppText>
        </View>
        <View className="flex-row flex-wrap justify-between">
          {data.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </View>
      </ScrollView>
      <View className="border-t-[1px] border-solid border-grey-200 h-[80px] flex-row items-center px-6">
        <AppText className="flex-1 text-[13px] text-black-300">
          0 of 5 completed
        </AppText>
        <Touchable className="h-[32px] bg-[#717171] rounded-2xl px-[21px] items-center justify-center">
          <AppText className="font-SemiBold text-white text-[13px]">
            Next
          </AppText>
        </Touchable>
      </View>
    </View>
  );
}
