import styles from './Button.module.css';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

const Button = ({ type, className, onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      className={`${styles.button} ${className ?? ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
