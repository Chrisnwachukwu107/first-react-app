import { ReactNode } from 'react';
import styles from './Card.module.css';
import CardHead from '../CardHead/CardHead';
import CardBottom from '../CardBottom/CardBottom';
import CardButton from '../CardButton/CardButton';

interface Props
{
    // children: ReactNode
    width: number;
    height: number;
    headingTwo: string;
    imageSrc: string;
    headingThree: string;
    colorCode: string;
    colorCodeTwo: string;
    imgMarginTop: number;
    h4Content: string;
    liContent: string[];
    liStyleImg: string;
    buttonContent: string;
    priceText?: string;
}

function Card({
    width,
    height,
    headingTwo,
    imageSrc,
    headingThree,
    colorCode,
    colorCodeTwo,
    imgMarginTop,
    h4Content,
    liContent,
    liStyleImg,
    buttonContent,
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

            <CardButton
                colorCode={ colorCode }
                colorCodeTwo={ colorCodeTwo }
            >
                { buttonContent }
            </CardButton>
        </div>
    );
}

export default Card;
