const api = `https://api.openweathermap.org/data/3.0/onecall?appid=${process.env.OPEN_WEATHER}&units=metric`;
const urlOpenWeatherIcon = (icon: string): string =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

export interface weatherType {
  description?: string;
  icon?: string;
  main?: string;
  temp?: number;
}

const getWeather = async (lat: number, lon: number): Promise<weatherType> => {
  const definedURL = new URL(api);
  definedURL.searchParams.append('lat', lat.toString());
  definedURL.searchParams.append('lon', lon.toString());
  return await fetch(definedURL.toString())
    .then(async (response) => await response.json())
    .then((json) => {
      const { temp } = json.current;
      const { icon, main, description } = json.current.weather[0];
      return { description, icon, main, temp };
    })
    .catch(() => {
      return {};
    });
};

export { urlOpenWeatherIcon, getWeather };
