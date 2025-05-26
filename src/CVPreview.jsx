

function CVPreview({formData}){

  return (
    <>
    <div className="display-curriculum">
      <div className="display-generalInfo">
        <div>
          <h1>{formData.generalInfo.fullName}</h1>
        </div>
        <div className="general-contact">
          <p>{formData.generalInfo.email}</p>
          <p>{formData.generalInfo.phoneNumber}</p>
        </div>
      </div>

      <div className="display-education two-column">
        <div className="left-side">
          <h2>Education</h2>
        </div>
        <div className="right-side">
          <div>
            <h3>{formData.education.fieldOfStudy}</h3>
            <p>{formData.education.dateOfStudy}</p>
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
              <p>{formData.experience.startDate}</p>
              <p>{formData.experience.endDate}</p>
            </div>
          </div>
          <p>{formData.experience.companyName}</p>
          <p>{formData.experience.responsibilities}</p>
        </div>
      </div>
    </div>
    <button id="edit-btn">Edit CV</button>
    </>
  )
}

export default CVPreview