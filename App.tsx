import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constant";
import { View, ActivityIndicator, Text } from "react-native";
import WeatherSearch from "./components/weatherSearch";
import WeatherInfo from "./components/weatherInfo";
export default function App() {
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState("");

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" color="#0000ff" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return <Text>Something went wrong</Text>;
      default:
        return;
    }
  };

  const searchWeather = (location: any) => {
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response: any) => {
        const data = response.data;

        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error: any) => {
        setStatus("error");
      });
  };

  return (
    <View className="p-5">
      <WeatherSearch searchWeather={searchWeather} />
      <View className="mt-5">{renderComponent()}</View>
    </View>
  );
}
