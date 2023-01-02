const api = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE}&libraries=places`;

interface coordinates {
  lat: number;
  lng: number;
}

const getCoordinates = async (placeId: string): Promise<coordinates> =>
  await new window.google.maps.Geocoder()
    .geocode({ placeId })
    .then((response: any): any => {
      const { location } = response.results[0].geometry;
      return { lat: location.lat(), lng: location.lng() };
    })
    .catch(() => {
      return { lat: null, lng: null };
    });

interface prediction {
  description: string;
  placeId: string;
}

const getPlaces = async (input: string): Promise<prediction[]> => {
  return await new window.google.maps.places.AutocompleteService()
    .getPlacePredictions({ input })
    .then((response: any): prediction[] => {
      const reducedPredictions = response.predictions.map(
        (predictionInList: any) => {
          const { description, place_id: placeId } = predictionInList;
          return { description, placeId };
        }
      );
      return reducedPredictions;
    })
    .catch(() => []);
};

export { api, getCoordinates, getPlaces };
