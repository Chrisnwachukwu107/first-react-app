import { ReactNode } from 'react';
import styles from './List.module.css';

interface Props
{
    liContent: string[];
    colorCode: string;
}

function List({
    liContent,
    colorCode,
}: Props): ReactNode
{
    const style = {
        listStyle: 'none',
    }

    const imgStyle = {
        backgroundColor: colorCode,
    }

    return (
        <ul
            className={`${ styles.ul }`}
        >
            { liContent.map((li, index) =>
            {
                return (
                <li
                    style={ style }
                    className={ `${styles["card-li"]}` }
                    key={ index }
                >
                    <img
                        src='/images/check.png'
                        alt=''
                        className={ `${styles["card-li-img"]}` }
                        style={ imgStyle }
                    />
                    {li}
                </li>
                );
            }) }
        </ul>
    );
}

export default List;
