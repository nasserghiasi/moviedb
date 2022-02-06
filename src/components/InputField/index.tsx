import React, { FormEventHandler, HTMLProps, useRef } from 'react';
import styles from './styles.module.scss';

interface Props extends HTMLProps<HTMLInputElement> {
  value?: string;
}

function Input({ onChange, value, ...props }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange: FormEventHandler<HTMLInputElement> = e => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      className={styles.input}
      onChange={handleOnChange}
      value={value}
      {...props}
    />
  );
}

export default Input;
