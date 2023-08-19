import { View, Image } from "react-native";
import AppText from "./AppText";
import Touchable from "./Touchable";

export default function FollowerCard({ style }) {
  return (
    <View
      className={`flex-row py-3 border-b-[1px] border-solid border-grey-300 ${style}`}
    >
      <Image
        source={require("../assets/images/dp-2.jpeg")}
        style={{ resizeMode: "cover" }}
        className="h-[52px] w-[56px] rounded-t-[10px] mr-3"
      />
      <View className="flex-1">
        <AppText className="font-SemiBold text-[12px]">Crypto King</AppText>
        <AppText className="font-Medium text-[10px] text-black-500 mb-1">
          @King.nft
        </AppText>
        <AppText
          className="font-Medium text-[10px] text-black-500"
          numberOfLines={1}
        >
          Self going and easy gaming e...
        </AppText>
      </View>
      <View>
        <Touchable className="bg-primary-700 py-1 px-4 rounded-lg">
          <AppText className="font-SemiBold text-[12px] text-white">
            Followed
          </AppText>
        </Touchable>
      </View>
    </View>
  );
}
