import React from "react";
import { TextInput, View, Text } from "react-native";

type Props = {
  text: string;
  onChange: (value: any) => void;
  multiline: boolean;
  placeholder: string;
  numberOfLines: number;
};

function CustomTextInput({
  text,
  onChange,
  multiline,
  placeholder,
  numberOfLines,
}: Props) {
  return (
    <View className="mt-8">
      <TextInput
        className="border-2 border-[#DDDDDD] p-4"
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
}

export default CustomTextInput;
