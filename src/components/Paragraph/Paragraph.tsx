import { ReactNode } from 'react';
import styles from './Paragraph.module.css';

interface Props
{
    children: ReactNode;
}

function Paragraph({ children }: Props): ReactNode
{
    return (
        <p
            className={ `${styles.paragraph } my-2` }
        >
            { children }
        </p>
    );
}

export default Paragraph;
