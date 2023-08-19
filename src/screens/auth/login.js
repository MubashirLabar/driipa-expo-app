import { View, Image, Text, ScrollView } from "react-native";
import { useState } from "react";
import { styles } from "../../style";
import routes from "../../navigation/routes";
import { Touchable, TextField, AppButton } from "components";
import {
  GoogleIcon,
  FacebookIcon,
  TwitterIcon,
  DiscordIcon,
  InfoIcon,
} from "assets/icons";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View className="items-center">
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ resizeMode: "contain" }}
          className="h-[180px] w-[180px]"
        />
      </View>
      <View
        className="flex-1 bg-white rounded-t-[60px] px-8 py-10"
        style={styles.boxShadow}
      >
        <View className="mb-6">
          <Text className="font-Bold text-black-900 text-[18px] mb-1">
            Sign in
          </Text>
          <Text className="font-Regular text-black-600 text-[12px]">
            Your blockchain wallet with one click
          </Text>
        </View>
        <Touchable className="bg-primary-700 rounded-full h-[44px] flex-row items-center justify-center mb-4">
          <GoogleIcon color="#fff" className="mr-3.5" />
          <Text className="font-Medium text-[13px] text-white">
            Continue with Google
          </Text>
        </Touchable>
        <View className="flex-row items-center justify-between mb-[20px]">
          <Touchable className="bg-grey-300 h-[40px] w-[95px] rounded-[18px] items-center justify-center">
            <FacebookIcon />
          </Touchable>
          <Touchable className="bg-grey-300 h-[40px] w-[95px] rounded-[18px] items-center justify-center">
            <TwitterIcon />
          </Touchable>
          <Touchable className="bg-grey-300 h-[40px] w-[95px] rounded-[18px] items-center justify-center">
            <DiscordIcon />
          </Touchable>
        </View>
        <Text className="font-Regular text-black-600 text-[12px] mb-[20px]">
          We do not store any data related to your social logins.
        </Text>
        <View className="items-end mb-[20px]">
          <Touchable>
            <Text className="font-Medium text-[14px] text-primary-500">
              View more options
            </Text>
          </Touchable>
        </View>
        <View className="mb-[20px]">
          <View className="flex-row items-center mb-3.5">
            <Text className="font-Medium text-black-900 text-[14px] mr-1">
              Email or Phone
            </Text>
            <InfoIcon />
          </View>
          <TextField
            placeholder="email..."
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <AppButton
          label="Continue"
          className={`h-[48px] rounded-full mb-3.5`}
          labelStyle="font-Medium"
          disabled={!email}
          onPress={() => navigation.navigate(routes.CREATE_PROFILE)}
        />
        <View>
          <Text className="font-Medium text-black-900 text-[14px] mb-3.5">
            External Wallet
          </Text>
          <AppButton
            label="Connect with Wallet"
            className={`h-[44px] rounded-full bg-[#F9F9F9] border-[#E3E3E3] mb-3.5`}
            labelStyle="font-Regular text-black-900"
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
