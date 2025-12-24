import './App.css'
import Navbar from './components/layout/Navbar'
import HeroSection from './components/layout/HeroSection'
import Trusted from './components/layout/Trusted'
import IndustryUseCases from './components/layout/IndustryUseCases'
import WhatLyzrSolves from './components/layout/WhatLyzrSolves'
import SelfServePlatform from './components/layout/SelfServePlatform'
import Footer from './components/layout/Footer'
import SubscribeStrip from './components/layout/SubscribeStrip'
import UseCaseCTA from './components/layout/UseCaseCTA'
import WhyLyzr from './components/layout/WhyLyzr'
import GetStarted from './components/layout/GetStarted'
import Insiders from './components/layout/Insiders'
import SecurityCompliance from './components/layout/SecurityCompliance'
import EnterpriseIntegrations from './components/layout/EnterpriseIntegrations'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Trusted />
      <IndustryUseCases />
      <WhatLyzrSolves />
      <SelfServePlatform />
      <WhyLyzr />
      <GetStarted />
      <Insiders />
      <SecurityCompliance />
      <EnterpriseIntegrations /> 
      <UseCaseCTA />
      <SubscribeStrip />
      <Footer />
    </>
  )
}

export default App
