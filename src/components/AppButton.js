import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const AppButton = ({
  label = "Button",
  isLoading,
  type = "primary",
  className,
  labelStyle,
  icon,
  disabled,
  ...rest
}) => {
  const _style =
    type === "transparent"
      ? "bg-transparent border-0"
      : type === "hole"
      ? "bg-transparent"
      : "bg-primary-700";

  const _textStyle =
    type === "transparent"
      ? "text-black-700"
      : type === "hole"
      ? "text-primary-700"
      : "";

  return (
    <TouchableOpacity
      className={`w-full h-[44px] rounded-[20px] flex flex-row items-center justify-center py-[10px] px-4 border-[1px] border-primary-700 ${_style} ${className} ${
        disabled ? "bg-[#F9F9F9] border-transparent" : ""
      }`}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <>
          <Text
            className={`flex-1 text-center font-SemiBold text-white text-[13px] ${_textStyle} ${labelStyle} ${
              disabled ? "text-black-300" : ""
            }`}
          >
            {label}
          </Text>
          {icon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
