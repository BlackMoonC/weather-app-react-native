import React from "react";
import { View, Text, Image } from "react-native";

interface IWeather {
  main: string;
  description: string;
  icon: string;
}

type IWeatherData = {
  name: string;
  main: { temp: number };
  visibility: string;
  weather: Array<IWeather>;
  wind: { speed: number };
};

type Props = {
  weatherData: IWeatherData;
};

function WeatherInfo({ weatherData }: Props) {
  return (
    <View className="mt-5">
      <Text className="text-center">The weather of {weatherData.name}</Text>
      <Text className="font-bold text-7xl text-center mt-5">
        {weatherData.main.temp} C
      </Text>
      <View className="flex flex-row justify-center items-center mt-5">
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          }}
          className="w-12 h-12"
        />
        <Text className="text-center font-bold">
          {weatherData.weather[0].main}
        </Text>
      </View>
      <Text className="text-center">{weatherData.weather[0].description}</Text>
      <View className="flex flex-row justify-center items-center mt-5">
        <Text className="text-center font-bold">Visibility :</Text>
        <Text className="text-center ml-4">{weatherData.visibility} km</Text>
      </View>
      <View className="flex flex-row justify-center items-center mt-5">
        <Text className="text-center font-bold">Wind Speed :</Text>
        <Text className="text-center ml-4">{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
}

export default WeatherInfo;
