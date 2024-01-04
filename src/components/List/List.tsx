import { ReactNode } from 'react';
import styles from './List.module.css';

interface Props
{
    liContent: string[];
    liStyleImg: string;
}

function List({
    liContent,
    liStyleImg,
}: Props): ReactNode
{
    const style = {
        listStyleImage: `url(${liStyleImg})`,
    }

    return (
        <ul
            className={ styles.ul }
        >
            { liContent.map((li, index) =>
            {
                return (
                <li
                    style={ style }
                    key={ index }
                >
                    {li}
                </li>
                );
            }) }
        </ul>
    );
}

export default List;
