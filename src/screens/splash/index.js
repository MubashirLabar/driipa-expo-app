import { View, Dimensions, StatusBar } from "react-native";
import React, { useRef } from "react";
import Icon from "react-native-vector-icons/Feather";
import AppButton from "components/AppButton";
import routes from "navigation/routes";
import LottieView from "lottie-react-native";
import colors from "../../style/colors";

const { width, height } = Dimensions;

function SplashScreen({ navigation }) {
  const animation = useRef(null);
  return (
    <View className="flex-1 items-center justify-center bg-[#101984]">
      <StatusBar
        backgroundColor="#101984"
        translucent
        barStyle="light-content"
      />
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: width,
          height: height,
        }}
        source={require("../../assets/lottie/drop-loading.json")}
      />
      <View className="w-full absolute bottom-8 px-[30px]">
        <AppButton
          label="continue"
          className="bg-white rounded-[10px]"
          labelStyle="text-black-900"
          icon={
            <Icon
              size={15}
              name="arrow-right-circle"
              color={colors.black[900]}
            />
          }
          onPress={() => navigation.navigate(routes.ONBOARDING_SCREEN)}
        />
      </View>
    </View>
  );
}

export default SplashScreen;
