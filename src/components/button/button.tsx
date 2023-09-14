import styles from './button.module.css';

type TProps = {
  onClick: () => void;
  text: string;
  disabled: boolean;
  onKeyDown?: () => void;
  className?: string;
}

export const Button = ({onClick, text, disabled, onKeyDown, className}: TProps) => {
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} className={className} disabled={disabled}>{text}</button>
  )
}