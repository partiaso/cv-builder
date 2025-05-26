import emailIcon from '../assets/email.svg'
import phoneIcon from '../assets/phone.svg'

function CVPreview({formData, setSubmittedForm}){
    function formatDate(isoDate){
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-')
    return `${day}/${month}/${year}`
  }


  return (
    <>
    <div className="display-curriculum">
      <div className="display-generalInfo">
        <div>
          <h1>{formData.generalInfo.fullName}</h1>
        </div>
        <div className="general-contact">
          <div>
            <img src={emailIcon} alt="email" />
            <p>{formData.generalInfo.email}</p>
          </div>
          <div>
            <img src={phoneIcon} alt="phone number" />
            <p>{formData.generalInfo.phoneNumber}</p>
          </div>


        </div>
      </div>

      <div className="display-education two-column">
        <div className="left-side">
          <h2>Education</h2>
        </div>
        <div className="right-side">
          <div>
            <h3>{formData.education.fieldOfStudy}</h3>
            <p>{formatDate(formData.education.dateOfStudy)}</p>
            </div>
          <div>
            <p>{formData.education.schoolName}</p>
          </div>
        </div>
      </div>

      <div className="display-experience two-column">
        <div className="left-side">
          <h2>Experience</h2>
        </div>
        <div className="right-side">
          <div>
            <h3>{formData.experience.positionTitle}</h3>
            <div>
              <p>{formatDate(formData.experience.startDate)}</p>
              <p>{formatDate(formData.experience.endDate)}</p>
            </div>
          </div>
          <p>{formData.experience.companyName}</p>
          <p>{formData.experience.responsibilities}</p>
        </div>
      </div>
    </div>
    <button onClick={() => setSubmittedForm(false)} id="edit-btn">Edit CV</button>
    </>
  )
}

export default CVPreview