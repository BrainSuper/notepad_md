import React from 'react';
import styles from "../styles/Button.module.css";
interface ButtonProps {
    children: string
    onClick?: () => void
}
const Button = ({children, ...props}: ButtonProps) => {
    return (
        <span {...props} className={styles.delete}>{children}</span>
    );
};

export default Button;