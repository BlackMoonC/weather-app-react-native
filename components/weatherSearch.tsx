import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import CustomTextInput from "./customTextInput";

type Props = {
  searchWeather: (location: string) => void;
};

function WeatherSearch({ searchWeather }: Props) {
  const [location, setLocation] = useState("");

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        text={location}
        onChange={setLocation}
      />
      <View className="mt-5">
        <Button
          title="Search"
          onPress={() => {
            searchWeather(location);
          }}
        />
      </View>
    </View>
  );
}

export default WeatherSearch;
