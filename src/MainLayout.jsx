import CVForm from './components/Form.jsx'
import './styles/MainLayout.css'
import { useState } from 'react'
import CVPreview  from './CVPreview.jsx'




function MainLayout(){
  const [formSubmitted, setFormSubmitted] = useState(false)
  return(
  <div className='main-container'>
    {
    !formSubmitted ? <CVForm onSubmittedForm={setFormSubmitted}/> : <CVPreview/>      
    }
  </div>
  )
}

export default MainLayout