import { ReactNode } from 'react';
import styles from './App.module.css';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import CardSection from './components/CardSection/CardSection';
import Card from './components/Card/Card';

export default function App(): ReactNode | JSX.Element
{
  const showPricingCard = true;

  const cardList = [
    {
      headingTwo: 'Start-Up',
      imageSrc: "/images/start-up-img.png",
      headingThree: 'Free',
      imgMarginTop: 1.5,
      colorCode: '#5A5679',
      colorCodeTwo: '#302B51',
      h4Content: 'ENJOY ALL THESE FEATURES',
      liContent: [
        'Unlimited Downloads',
        'Email Support',
        'Limited Access'
      ],
      liStyleImg: '/images/start-up-check.png',
      buttonContent: 'CHOOSE',
    },
    {
      headingTwo: 'Pro',
      imageSrc: "/images/pro-img.png",
      headingThree: '49$',
      imgMarginTop: 1.5,
      colorCode: '#FF7473',
      colorCodeTwo: '#D43534',
      h4Content: 'EVERTHING IN FREE, PLUS',
      liContent: [
        'Upto 10 users',
        'Email Support, Call Support',
        '1 Year Access'
      ],
      liStyleImg: '/images/pro-check.png',
      buttonContent: 'CHOOSE',
      priceText: '/Year',
    },
    {
      headingTwo: 'Enterprise',
      imageSrc: "/images/enterprise-img.png",
      headingThree: '99$',
      imgMarginTop: 1.5,
      colorCode: '#47B8E0',
      colorCodeTwo: '#2F9ADB',
      h4Content: 'EVERYTHING IN PRO, PLUS',
      liContent: [
        'Unlimited Access',
        'On demand request',
        'Lifetime Access'
      ],
      liStyleImg: '/images/enterprise-check.png',
      buttonContent: 'CHOOSE',
    }
  ];

  const main: JSX.Element =
  <main>
    <Heading>
      CHOOSE YOUR PLAN
    </Heading>
    
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae velit, tempora soluta quas alias laboriosam dolores!
    </Paragraph>
  </main>

  return (
    <div
      className={`${ styles.container }`}
    >
      { main }
  
      { showPricingCard &&
      <CardSection>
        { cardList.map((card, index) =>
        {
          return (
            <Card
              key={ index }
              headingTwo={ card.headingTwo }
              imageSrc={ card.imageSrc }
              headingThree={ card.headingThree }
              imgMarginTop={ card.imgMarginTop }
              colorCode={ card.colorCode }
              colorCodeTwo={ card.colorCodeTwo }
              h4Content={ card.h4Content }
              liContent={ card.liContent }
              liStyleImg={ card.liStyleImg }
              buttonContent={ card.buttonContent }
              className = { `card-${card.headingTwo.toLowerCase()}` }
              priceText={ card.priceText }
            />
          );
        })
        }
      </CardSection>
      }
    </div>
  );
}
