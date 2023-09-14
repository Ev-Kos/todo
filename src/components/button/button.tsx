import styles from './button.module.css';

type TProps = {
  onClick: () => void;
  text: string;
  disabled: boolean;
  onKeyDown?: () => void;
}

export const Button = ({onClick, text, disabled, onKeyDown}: TProps) => {
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} disabled={disabled}>{text}</button>
  )
}