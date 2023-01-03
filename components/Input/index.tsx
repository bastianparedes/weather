import React, { ChangeEvent, useState } from 'react';

import { classNames } from 'bastianparedes/utils';
import { BsSearch } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import styles from './styles.module.scss';

interface props {
  name?: string;
  placeholder?: string;
}

const Input = ({ name = '', placeholder = '' }: props): JSX.Element => {
  const [value, setValue] = useState('');

  const handleTyping = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleClickEraserButton = (): void => {
    setValue('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          name={name}
          onChange={handleTyping}
          placeholder={placeholder}
          type="text"
          value={value}
        />
        <button
          className={classNames(
            styles.eraserButton,
            value === '' && styles.hiddenEraserButton
          )}
          onClick={handleClickEraserButton}
          type="button"
        >
          <GrClose />
        </button>
      </div>
      <button className={styles.button} type="submit">
        <div className={styles.iconContainer}>
          <BsSearch />
        </div>
      </button>
    </div>
  );
};

export default Input;
