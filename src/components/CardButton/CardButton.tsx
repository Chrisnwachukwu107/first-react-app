import styles from './CardButton.module.css';
import { ReactNode } from 'react';

interface Props
{
    children: ReactNode;
    colorCode: string;
    colorCodeTwo: string;
}

function CardButton({
    children,
    colorCode,
    colorCodeTwo,
}: Props): ReactNode
{
    const style = {
        backgroundColor: colorCode,
        color: 'white',
        fontWeight: 600,
        fontSize: '1.1rem',
        border: `2px solid ${colorCodeTwo}`
    }

    return (
        <button
            className={ styles.button }
            style={ style }
        >
            { children }
        </button>
    );
}

export default CardButton;
