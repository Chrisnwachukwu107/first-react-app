import styles from './CardBottom.module.css';
import { ReactNode } from 'react';
import List from '../List/List';

interface Props
{
    h4Content: string;
    colorCode: string;
    liContent: string[];
    liStyleImg: string;
}

function CardBottom({
    h4Content,
    colorCode,
    liContent,
    liStyleImg
}: Props): ReactNode
{
    const style = {
        color: colorCode,
    }

    return (
        <div
            style={ style }
        >
            <h4
                className={ styles["card-bottom-h4"] }
            >
                { h4Content }
            </h4>

            <List
                liContent = { liContent }
                liStyleImg = { liStyleImg }
            >
            </List>
        </div>
    );
}

export default CardBottom;