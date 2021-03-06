import React from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Slide from './slide'

import SlideImg1 from '../../../assets/onboarding/onboarding-1.png'
import SlideImg2 from '../../../assets/onboarding/onboarding-2.png'
import SlideImg3 from '../../../assets/onboarding/onboarding-3.png'

const { width } = Dimensions.get('window')

const Onboarding: React.FC = ({ navigation }: any) => {
  return (
    <ScrollView
      horizontal
      snapToInterval={width}
      decelerationRate="normal"
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum={true}
      bounces={true}
    >
      <Slide
        id={0}
        navigation={navigation}
        imageSrc={SlideImg1}
        title="Exchange Bitcoin & Ethereum For Money"
        description="Provide us with the necessary required information and let us do the convertion asap!!!"
      />
      <Slide
        id={1}
        navigation={navigation}
        imageSrc={SlideImg2}
        title="Got Giftcards you want to redeem for cash?"
        description="Unlimited type cards on our platform ranging from amazon, iTunes, Google Play Store and e.t.c"
      />
      <Slide
        id={2}
        navigation={navigation}
        imageSrc={SlideImg3}
        title="You’re One Step Closer to Cashing Out Your Exchange"
        description="Our pay out process is the one of the fatest and guaranteed trusted"
        buttonLabel="Continue"
      />
    </ScrollView>
  )
}

export default Onboarding
