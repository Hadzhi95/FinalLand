import Index from './pages/Index/Index';
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TrainingAgreement from './components/TrainingAgreement/TrainingAgreement';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path ='/IndiaLend/dist/index.html' element={<Index />}/>
        <Route path ='/privacy' element={<PrivacyPolicy />}/>
        <Route path ='/agreement' element={<TrainingAgreement/>}/>
      </Routes>
    </div>
  )
}

export default App