import { ScrollView, View, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import colors from "style/colors";
import routes from "navigation/routes";
import { AppText, Touchable, TextField, AppButton } from "components";
import {
  AddIcon,
  UserIcon,
  StarIcon,
  CheckCircleIcon,
  CalendarIcon,
} from "assets/icons";

export default function CreateProfileScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result?.assets[0]);
    }
  };

  return (
    <ScrollView
      className="flex-1 px-6 py-8"
      showsVerticalScrollIndicator={false}
    >
      <View className="mb-12">
        <AppText className="font-Bold text-[18px] mb-2">
          Just few steps...
        </AppText>
        <AppText className="text-[13px] text-black-500 max-w-[80%]">
          set up your identity on the block!
        </AppText>
      </View>
      <View className="items-center justify-center mb-6">
        <View className="h-[100px] w-[100px] bg-grey-200 rounded-full relative flex items-center justify-center">
          <Image
            source={require("../../assets/images/dp.jpeg")}
            style={{ resizeMode: "cover" }}
            className="h-full w-full rounded-full z-0"
          />
          <Touchable className="absolute z-10" onPress={pickImage}>
            <AddIcon />
          </Touchable>
        </View>
      </View>
      <View className="flex gap-y-5 mb-8">
        <View className="w-full bg-secondary-500 border-[1px] border-solid border-secondary-200 p-3 rounded-[12px]">
          <View className="flex-row items-center mb-1.5">
            <UserIcon color={colors.primary[700]} />
            <AppText className="font-SemiBold text-[13px] text-primary-700 ml-1.5 mr-[2px]">
              Driiptag
            </AppText>
            <StarIcon size={10} color={colors.red[500]} />
          </View>
          <View className="flex-row items-center">
            <TextField
              placeholder="@Daniseeth"
              className="flex-1 bg-white h-[40px] border-0 text-[13px] px-4 rounded-[12px]"
            />
            <View className="ml-2">
              <CheckCircleIcon color={colors.primary[700]} />
            </View>
          </View>
        </View>
        <View className="w-full bg-secondary-500 border-[1px] border-solid border-secondary-200 p-3 rounded-[12px]">
          <View className="flex-row items-center mb-1.5">
            <CalendarIcon size={18} color={colors.primary[700]} />
            <AppText className="font-SemiBold text-[13px] text-primary-700 ml-1.5 mr-[2px]">
              Date of Birth
            </AppText>
          </View>
          <View className="flex-row items-center">
            <View className="flex-1 flex-row items-center gap-x-2">
              <TextField
                placeholder="Day"
                className="flex-1 bg-white h-[40px] border-0 text-[13px] px-4 rounded-[12px]"
              />
              <TextField
                placeholder="Month"
                className="flex-1 bg-white h-[40px] border-0 text-[13px] px-4 rounded-[12px]"
              />
              <TextField
                placeholder="Year"
                className="flex-1 bg-white h-[40px] border-0 text-[13px] px-4 rounded-[12px]"
              />
            </View>

            <View className="ml-2">
              <CheckCircleIcon color={colors.primary[700]} />
            </View>
          </View>
        </View>
        <View className="w-full bg-secondary-500 border-[1px] border-solid border-secondary-200 p-3 rounded-[12px]">
          <View className="flex-row items-center mb-1.5">
            <UserIcon color={colors.primary[700]} />
            <AppText className="font-SemiBold text-[13px] text-primary-700 ml-1.5 mr-[2px]">
              Public Profile Name
            </AppText>
          </View>
          <View className="flex-row items-center">
            <TextField
              placeholder="@Daniseeth"
              className="flex-1 bg-white h-[40px] border-0 text-[13px] px-4 rounded-[12px]"
            />
            <View className="ml-2">
              <CheckCircleIcon color={colors.primary[700]} />
            </View>
          </View>
        </View>
      </View>
      <AppButton
        label="Continue"
        className="rounded-[10px]"
        onPress={() => navigation.navigate(routes.FOLLOWER_SUGGESTIONS)}
      />
    </ScrollView>
  );
}
