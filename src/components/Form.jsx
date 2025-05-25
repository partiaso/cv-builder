import { useState } from "react"

function Form(){
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


  function handleForm(e){
    e.preventDefault()
    setFormSubmitted(true)
  }

  function handleChange(section, e) {
    const {name, value} = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [section]: {
        ...prevFormData[section],
        [name]: value
      }
      }))
  }
  return (
    <form onSubmit={handleForm}>
      <section>
        <h2>General Information</h2>
        <div className="input-container">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.generalInfo.fullName}
              onChange={e => handleChange('generalInfo', e)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.generalInfo.email}
              onChange={e => handleChange('generalInfo', e)}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phoneNumber"
              value={formData.generalInfo.phoneNumber}
              onChange={e => handleChange('generalInfo', e)}
            />
          </label>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="input-container">
          <label>
            School Name
            <input
              type="text"
              name="schoolName"
              value={formData.education.schoolName}
              onChange={e => handleChange('education', e)}
            />
          </label>
          <label>
            Field of Study
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.education.fieldOfStudy}
              onChange={e => handleChange('education', e)}
            />
          </label>
          <label>
            Date of Study
            <input
              type="date"
              name="dateOfStudy"
              value={formData.education.dateOfStudy}
              onChange={e => handleChange('education', e)}
            />
          </label>
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="input-container">
          <label>
            Company Name
            <input
              type="text"
              name="companyName"
              value={formData.experience.companyName}
              onChange={e => handleChange('experience', e)}
            />
          </label>
          <label>
            Position Title
            <input
              type="text"
              name="positionTitle"
              value={formData.experience.positionTitle}
              onChange={e => handleChange('experience', e)}
            />
          </label>
          <label>
            Responsibilities
            <input
              type="text"
              name="responsibilities"
              value={formData.experience.responsibilities}
              onChange={e => handleChange('experience', e)}
            />
          </label>
          <label>
            Start Date
            <input
              type="date"
              name="startDate"
              value={formData.experience.startDate}
              onChange={e => handleChange('experience', e)}
            />
          </label>
          <label>
            End Date
            <input
              type="date"
              name="endDate"
              value={formData.experience.endDate}
              onChange={e => handleChange('experience', e)}
            />
          </label>
        </div>
      </section>
      <button type="submit" id="submit-btn">Create CV</button>
      {formSubmitted && <p>✅ Form submitted!</p>}
    </form>
  );
}


export default Form