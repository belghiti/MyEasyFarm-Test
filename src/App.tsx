import { useState } from 'react'
import { Feature } from './types/app-types'
import Field from './components/field'
import Preview from './components/preview'
import { StartButton } from './components/styled/StartButton'
import { WelcomePageContainer } from './components/styled/WelcomePageContainer'
import { MapsContainer } from './components/styled/MapsContainer'
import { Logo } from './components/styled/logo'
import imgLogo from './images/logo.png'


const App = () => {
  const [start, setStart] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<Feature>({} as Feature)

  return (
    !start ? 
      <WelcomePageContainer>
        <StartButton onClick={() => setStart(true)}>Start</StartButton>
      </WelcomePageContainer> :
      <MapsContainer>
        <Logo src={imgLogo} alt="MyEasyFarm logo"/>
        <Preview feature={selectedFeature} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Field setIsOpen={setIsOpen} setSelectedFeature={setSelectedFeature} />
      </MapsContainer>
  )
}

export default App
