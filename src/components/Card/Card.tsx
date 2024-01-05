import React from 'react';
import { ReactNode } from 'react';
import styles from './Card.module.css';
import CardHead from '../CardHead/CardHead';
import CardBottom from '../CardBottom/CardBottom';
import Button from '../Button/Button';

interface Props
{
    headingTwo: string;
    imageSrc: string;
    headingThree: string;
    colorCode: string;
    imgMarginTop: number;
    h4Content: string;
    liContent: string[];
    liStyleImg: string;
    buttonContent: string;
    className: string;
    whenButtonIsClicked: (message: string) => void;
    message: string;
    whenButtonIsHovered: (event: React.MouseEvent<HTMLButtonElement>) => void;
    priceText?: string;
}

function Card({
    headingTwo,
    imageSrc,
    headingThree,
    colorCode,
    imgMarginTop,
    h4Content,
    liContent,
    liStyleImg,
    buttonContent,
    className,
    whenButtonIsClicked,
    message,
    whenButtonIsHovered,
    priceText,
}: Props): ReactNode
{
    
    return (
        <div
            className={ `${styles.card} ${styles[className]} px-2` }
        >
            <CardHead
                headingTwo={ headingTwo }
                imageSrc={ imageSrc }
                headingThree={ headingThree }
                priceText={ priceText }
                colorCode = { colorCode }
                imgMarginTop={ imgMarginTop }
            />

            <p
                className={ `${styles["card-p"]} my-2` }
            >
            </p>
            
            <CardBottom
                h4Content={ h4Content }
                colorCode={ colorCode }
                liContent={ liContent }
                liStyleImg={ liStyleImg }
            />

            <Button
                headingTwo={ headingTwo }
                whenButtonIsClicked={ function()
                {
                    whenButtonIsClicked(headingTwo)
                } }
                message= { message }
                whenButtonIsHovered={ whenButtonIsHovered }
            >
                { buttonContent }
            </Button>
        </div>
    );
}

export default Card;
