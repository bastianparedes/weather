import React from 'react';

import styles from './styles.module.scss';

interface props {
  description: string;
  placeId: string;
}

const Place = ({ placeId, description }: props): JSX.Element => {
  return (
    <button className={styles.button} type="submit" value={placeId}>
      {description}
    </button>
  );
};

export default Place;
