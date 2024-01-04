import { ReactNode } from 'react';
import styles from './CardSection.module.css';

interface Props
{
    children: ReactNode;
}

function CardSection({ children }: Props): ReactNode
{
    return (
        <div
            className={ `${styles["card-section"]} flex flex-direction around-center gap py-4 mx-2` }
        >
            { children }
        </div>
    );
}

export default CardSection;
