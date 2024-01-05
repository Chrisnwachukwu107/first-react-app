import styles from './Button.module.css';
import { ReactNode } from 'react';

interface Props
{
    children: ReactNode;
    colorCode: string;
    colorCodeTwo: string;
}

export default function Button({
    children,
    colorCode,
    colorCodeTwo,
}: Props): ReactNode
{
    const style = {
        backgroundColor: colorCode,
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
