import { ScrollView, View } from "react-native";
import routes from "navigation/routes";
import { AppText, FollowerCard, Touchable } from "components";

export default function FollowerSuggestions({ navigation }) {
  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1 px-6 py-8"
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-8">
          <AppText className="font-Bold text-[18px] mb-2">
            Suggested for you!
          </AppText>
          <AppText className="text-[13px] text-black-500">
            You need to follow at least 5 different users on driipa to continue
          </AppText>
        </View>
        <View className="mb-[15px]">
          {[...Array(10)].map((_, index) => (
            <FollowerCard key={index} style="mb-4" />
          ))}
        </View>
      </ScrollView>
      <View className="border-t-[1px] border-solid border-grey-200 h-[80px] flex-row items-center px-6">
        <AppText className="flex-1 text-[13px] text-black-300">
          2 of 5 completed
        </AppText>
        <Touchable
          className="h-[32px] bg-[#717171] rounded-2xl px-[21px] items-center justify-center"
          onPress={() => navigation.navigate(routes.LIKES_DATA)}
        >
          <AppText className="font-SemiBold text-white text-[13px]">
            Next
          </AppText>
        </Touchable>
      </View>
    </View>
  );
}
