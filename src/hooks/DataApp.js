import { useState } from "react";
import { getWeather } from "../helpers/getWeather";

//estados y funciones
export const DataApp = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temp: "",
    icon: "",
    condition: "",
  });

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getCityWeather = async () => {
    const { data, error } = await getWeather(city);
    if (error) {
      setWeather({
        city: "",
        country: "",
        temp: "",
        icon: "",
        condition: "",
      })
      setError(error);
    }
    if (data) {
      setWeather({
        city: data?.location?.name,
        country: data?.location?.country,
        temp: data?.current?.temp_c,
        condition: data?.current?.condition?.text,
        icon: data?.current?.condition?.icon,
      });
        setError(null)
      // console.log("llego data");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getCityWeather();
    setCity("");
  };
  // console.log(weather)

  return {
    city,
    weather,
    handleChange,
    onSubmit,
    error
  };
};
