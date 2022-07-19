import styles from './Button.module.css';

const Button = props => {

    return (
        <button className={`${styles['btn-primary']}  ${props.inverse && styles['btn--inverse']}  ${props.round && styles['btn--round']}  ${props.className}`} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );

};

export default Button;