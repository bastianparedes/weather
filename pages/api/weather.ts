import type { NextApiRequest, NextApiResponse } from 'next';

import { getWeather } from '../../utils/openWeather';

const weather = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { lat, lng } = JSON.parse(req.body);
    await getWeather(lat, lng)
      .then((response) => {
        res.status(200);
        res.send(response);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
      })
      .finally(() => {
        res.end();
      });
  }
};

export default weather;
