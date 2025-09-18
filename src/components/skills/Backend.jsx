import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills_level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">REST APIs</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend