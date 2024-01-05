import React from 'react';
import styles from './Button.module.css';
import { ReactNode, useEffect } from 'react';

interface Props
{
    children: ReactNode;
    headingTwo: string;
    // doSomething: () => void;
    whenButtonIsClicked: (message: string) => void;
    message: string;
    whenButtonIsHovered: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
    children,
    headingTwo,
    whenButtonIsClicked,
    message,
    whenButtonIsHovered,
}: Props): ReactNode
{
    useEffect(() =>
    {
        const button: HTMLElement | null = document.getElementById('my-id');
        button?.addEventListener('click', (): void =>
        {
            whenButtonIsClicked(message);
        });
    },
    [])

    return (
        <button
            // id="my-id"
            className={ `${styles.button} ${styles[`button-${headingTwo.toLowerCase()}`]}` }
            onClick={ () =>
            {
                whenButtonIsClicked(message);
            } }
            onMouseOver={ whenButtonIsHovered }
            // onClick={ () =>
            // {
            //     doSomething();
            // } }
            // onClick={ function()
            // {
            //     console.log("Do something else");
            //     doSomething();
            // } }
        >
            { children }
        </button>
    );
}
