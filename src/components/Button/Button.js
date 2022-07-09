import styles from './Button.module.css';

const Button = props => {
    return (
        <button className={`${styles['btn-primary']}  ${props.inverse && styles['btn--inverse']}  ${props.peach && styles['btn--peach']}  ${props.green && styles['btn--green']}  ${props.grey && styles['btn--grey']}  ${props.className}`} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;