import React from 'react';

import { urlOpenWeatherIcon, weatherType } from '../../utils/openWeather';
import styles from './styles.module.scss';

export interface weatherCardPropsType extends weatherType {
  placeName?: string;
}

const WeatherCard = ({
  description = '',
  icon = '',
  main = '',
  placeName = '',
  temp = 0
}: weatherCardPropsType): JSX.Element => {
  const urlIcon = urlOpenWeatherIcon(icon);

  return (
    <div className={styles.container}>
      <h1>{placeName}</h1>
      <img className={styles.container} src={urlIcon} alt={icon} />
      <h2>{main}</h2>
      <h3>{temp} °C</h3>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
