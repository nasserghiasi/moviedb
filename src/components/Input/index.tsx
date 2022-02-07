import React, { FormEventHandler, HTMLProps } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  value?: string;
}

function Input({ onChange, value, ...props }: Props) {
  const handleOnChange: FormEventHandler<HTMLInputElement> = e => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        onChange={handleOnChange}
        value={value}
        {...props}
      />
    </div>
  );
}

export default Input;
