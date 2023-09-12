import styles from './button.module.css';

type TProps = {
  onClick: () => void;
  text: string;
}

export const Button = ({onClick, text}: TProps) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}