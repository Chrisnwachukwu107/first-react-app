import { ReactNode } from "react";
import styles from './Heading.module.css';

interface Props
{
    children: ReactNode;
}

function Heading({ children }: Props): ReactNode
{
    return (
        <h1
            className={ `${styles.heading}` }
        >
            { children }
        </h1>
    );
}

export default Heading;
