import { useState } from 'react'
import { useSelector } from 'react-redux'
import Field from './components/field'
import Preview from './components/preview'
import { StartButton } from './components/styled/StartButton'
import { WelcomePageContainer } from './components/styled/WelcomePageContainer'
import { MapsContainer } from './components/styled/MapsContainer'
import { Logo } from './components/styled/logo'
import imgLogo from './images/logo.png'


const App = () => {
  const [start, setStart] = useState(false)
  const state: any = useSelector(state => state)
  
  return (
    !start ? 
      <WelcomePageContainer>
        <StartButton onClick={() => setStart(true)}>Start</StartButton>
      </WelcomePageContainer> :
      <MapsContainer>
        <Logo src={imgLogo} alt="MyEasyFarm logo"/>
        <Preview isOpen={state.map.previewOpen} />
        <Field />
      </MapsContainer>
  )
}

export default App
