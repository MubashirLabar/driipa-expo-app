import { TextInput } from "react-native";
import colors from "style/colors";

function TextField({ className, ...rest }) {
  return (
    <TextInput
      className={`w-full h-[44px] px-[24px] bg-[#F6F6F6] border-[1px] border-[#E3E3E3] rounded-[20px] font-Regular text-[14px] text-black-700 ${className}`}
      underlineColorAndroid="transparent"
      placeholderTextColor={colors.black[300]}
      includeFontPadding={false}
      autoCapitalize="none"
      autoCorrect={false}
      {...rest}
    />
  );
}

export default TextField;
