import {  HTMLProps, forwardRef } from 'react';

type TProps = {
  className: string;
}

type Ref = HTMLInputElement;

type Props = TProps & Ref

export const InputToDo = forwardRef<Props, HTMLProps<HTMLInputElement>>(
  ({ defaultValue, type, value, onChange, onKeyDown, className, placeholder}, ref) => {
  return (
    <input type={type}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      ref={ref}
      defaultValue={defaultValue}
      className={className}/>
  )
})