import { ReactNode } from 'react';
import styles from './App.module.css';
import Heading from './components/Heading/Heading';
import Paragraph from './components/Paragraph/Paragraph';
import CardSection from './components/CardSection/CardSection';
import Card from './components/Card/Card';

function App(): ReactNode
{
  return (
    <div
      className={`${ styles.container }`}
    >
      <Heading>
        CHOOSE YOUR PLAN
      </Heading>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae velit, tempora soluta quas alias laboriosam dolores!
      </Paragraph>

      <CardSection>
        <Card
          width={ 400 }
          height={ 700 }
          headingTwo='Start-Up'
          imageSrc="../public/images/start-up-img.png"
          headingThree='Free'
          imgMarginTop={ 1.5 }
          colorCode='#5A5679'
          h4Content='ENJOY ALL THESE FEATURES'
          liContent={ [ 'Unlimited Downloads', 'Email Support', 'Limited Access' ] }
          liStyleImg='./public/images/start-up-check.png'
        >
        </Card>

        <Card
          width={ 400 }
          height={ 700 }
          headingTwo='Pro'
          imageSrc="../public/images/pro-img.png"
          headingThree='49$'
          imgMarginTop={ 1.5 }
          colorCode='#FF7473'
          h4Content='EVERTHING IN FREE, PLUS'
          liContent={ [ 'Upto 10 users', 'Call Support', '1 Year Access' ] }
          liStyleImg='./public/images/pro-check.png'
          priceText='Year'
        >
        </Card>

        <Card
          width={ 400 }
          height={ 700 }
          headingTwo='Enterprise'
          imageSrc="../public/images/enterprise-img.png"
          headingThree='99$'
          imgMarginTop={ 1.5 }
          colorCode='#47B8E0'
          h4Content='EVERYTHING IN PRO, PLUS'
          liContent={ [ 'Unlimited Access', 'On demand request', 'Lifetime Access' ] }
          liStyleImg='./public/images/enterprise-check.png'
        >
        </Card>
      </CardSection>
    </div>
  );
}

export default App;