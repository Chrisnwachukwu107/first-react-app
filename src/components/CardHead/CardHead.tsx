import { ReactNode } from 'react';
import styles from './CardHead.module.css';

interface Props
{
    headingTwo: string;
    imageSrc: string;
    headingThree: string;
    colorCode: string;
    imgMarginTop: number
    priceText?: string;
}

function CardHead({
    headingTwo,
    imageSrc,
    headingThree,
    colorCode,
    imgMarginTop,
    priceText,
}: Props): ReactNode
{
    const style = {
        color: colorCode,
    }
    const imgStyle = {
        marginTop: `${imgMarginTop}rem`,
    }

    if (priceText !== '') priceText = ` /${priceText}`;
    else priceText = '';

    return (
        <div
            className={ `${styles["card-head"]}` }
            style={ style }
        >
            <h2
                className='my-2'
            >
                { headingTwo }
            </h2>
            <div
                className={ `${styles["card-img-div"]}` }
            >
                <img
                    className={ `${styles["card-img"]}` }
                    src={ imageSrc }
                    alt="card image"
                    style= { imgStyle }
                />
            </div>
            <h3
                className={ `${styles["card-h3"]}` }
            >
                { headingThree }
                { priceText && <span
                    className={ `${styles["card-span"]}` }
                >
                    { priceText }
                </span> }
            </h3>
        </div>
    );
}

export default CardHead;
