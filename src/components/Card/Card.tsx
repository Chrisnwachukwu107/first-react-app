import { ReactNode } from 'react';
import styles from './Card.module.css';
import CardHead from '../CardHead/CardHead';
import CardBottom from '../CardBottom/CardBottom';

interface Props
{
    // children: ReactNode
    width: number;
    height: number;
    headingTwo: string;
    imageSrc: string;
    headingThree: string;
    colorCode: string;
    imgMarginTop: number;
    h4Content: string;
    liContent: string[];
    liStyleImg: string;
    priceText?: string;
}

function Card({
    width,
    height,
    headingTwo,
    imageSrc,
    headingThree,
    colorCode,
    imgMarginTop,
    h4Content,
    liContent,
    liStyleImg,
    priceText,
}: Props): ReactNode
{
    const style: React.CSSProperties = {
        width: width,
        height: height,
    }

    return (
        <div
            className={ `${styles.card} px-2 py-2` }
            style={ style }
        >
            <CardHead
                headingTwo={ headingTwo }
                imageSrc={ imageSrc }
                headingThree={ headingThree }
                priceText={ priceText }
                colorCode = { colorCode }
                imgMarginTop={ imgMarginTop }
            >
            </CardHead>

            <p
                className={ `${styles["card-p"]}` }
            >
            </p>
            
            <CardBottom
                h4Content={ h4Content }
                colorCode={ colorCode }
                liContent={ liContent }
                liStyleImg={ liStyleImg }
            >
            </CardBottom>
        </div>
    );
}

export default Card;
