import React from 'react';

import { Modal } from 'bastianparedes/components';
import { BiErrorCircle } from 'react-icons/bi';

import styles from './styles.module.scss';

interface props {
  setModalVisible: (boolean: boolean) => void;
}

const ResultModal = ({ setModalVisible }: props): JSX.Element => {
  return (
    <Modal setModalVisible={setModalVisible}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <BiErrorCircle />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Ha ocurrido un error, por favor inténtelo más tarde.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ResultModal;
