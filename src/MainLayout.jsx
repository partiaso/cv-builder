import CVForm from './components/Form.jsx'
import './styles/MainLayout.css'
import './styles/CVPreview.css'
import { useState } from 'react'
import CVPreview  from './CVPreview.jsx'




function MainLayout(){
  const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
  generalInfo: {
    fullName: '',
    email: '',
    phoneNumber: '',
  },
  education: 
    {
      schoolName: '',
      fieldOfStudy: '',
      dateOfStudy: '',
    }
  ,
  experience: 
    {
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    }

});
  return(
  <div className='main-container'>
    {
    !formSubmitted ? <CVForm onSubmittedForm={setFormSubmitted} setFormData={setFormData} formData={formData}/> : <CVPreview formData={formData}/>      
    }
  </div>
  )
}

export default MainLayout