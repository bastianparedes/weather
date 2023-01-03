import React, { useState } from 'react';

import { Loader } from 'bastianparedes/components';
import Input from 'components/Input';
import { getCoordinates, getPlaces } from 'utils/google';

import ErrorModal from '../components/ErrorModal';
import Place from '../components/Place';
import WeatherCard, { weatherCardPropsType } from '../components/WeatherCard';

interface typeElements extends HTMLFormControlsCollection {
  place: { value: string };
}

interface typeTarget {
  elements: typeElements;
}

interface typeNativeEvent {
  submitter: HTMLButtonElement;
}

const Index = (): JSX.Element => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [weather, setWeather] = useState<weatherCardPropsType>({});
  const [places, setPlaces] = useState<
    Array<{ description: string; placeId: string }>
  >([]);

  const handleOnSubmitPlace = (event: React.FormEvent): void => {
    event.preventDefault();
    if (window.google === undefined) return;
    const target = event.target as typeof event.target & typeTarget;
    const input = target.elements.place.value;

    if (input.trim() === '') {
      setPlaces(() => []);
      return;
    }

    setShowLoader(() => true);
    void getPlaces(input)
      .then((predictions) => {
        setPlaces(() => predictions);
      })
      .catch(() => {
        setShowErrorModal(true);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  const handleOnSubmitWeather = (event: React.FormEvent): void => {
    event.preventDefault();
    if (window.google === undefined) return;
    const nativeEvent = event.nativeEvent as typeof event.nativeEvent &
      typeNativeEvent;

    setShowLoader(() => true);
    const placeId = nativeEvent.submitter.value;
    const placeName = nativeEvent.submitter.innerText;
    void getCoordinates(placeId)
      .then(async ({ lat, lng }) => {
        return await fetch('/api/weather', {
          body: JSON.stringify({ lat, lng }),
          method: 'POST'
        });
      })
      .then(async (response) => await response.json())
      .then(({ description, icon, main, temp }) => {
        setWeather(() => ({ description, icon, main, placeName, temp }));
        setShowLoader(() => false);
      })
      .catch(() => {
        setShowErrorModal(true);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  return (
    <>
      {showErrorModal && <ErrorModal setModalVisible={setShowErrorModal} />}
      {showLoader && <Loader />}
      <form onSubmit={handleOnSubmitPlace}>
        <Input name="place" placeholder="Ingresa una ciudad" />
      </form>
      <form onSubmit={handleOnSubmitWeather}>
        {places.map((place) => {
          return (
            <Place
              description={place.description}
              key={place.placeId}
              placeId={place.placeId}
            />
          );
        })}
      </form>
      {JSON.stringify(weather) !== '{}' && <WeatherCard {...weather} />}
    </>
  );
};

export default Index;
