import { Text, Dimensions } from "react-native";
import { Touchable } from "components";

const screenWidth = Dimensions.get("window").width;
const itemWidth = (screenWidth - 60) / 3;

export default function Item({ item }) {
  return (
    <Touchable
      className={`border-[1px] border-solid border-grey-400 rounded-lg items-center justify-center h-[74px] mb-4`}
      style={{ width: itemWidth }}
    >
      <Text className="font-SemiBold text-[13px] text-black-900 text-center">
        {item.label}
      </Text>
    </Touchable>
  );
}
