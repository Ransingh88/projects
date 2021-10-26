import React from 'react'
import './Experience.css'

const Experience = () => {
    return (<>
        <div className="experience__mainContainer">
            <div className="experience">
            <div className="experience__left">
                <div>
                    <h1>1200+</h1>
                    <p>HOURS OF CODING</p>
                </div>
                <div>
                    <h1>600+</h1>
                    <p>GIT COMMITS</p>
                </div>
            </div>
            <div className="experience__right">
                <div>
                    <h1>20+</h1>
                    <p>PROJECTS</p>
                </div>
                <div>
                    <h1>100+</h1>
                    <p>HOURS OF SOFT SKILLS</p>
                </div>
            </div>
            </div>
            </div>
            <div>
                <img src="./images/github.png" alt="github" />
            </div>
        </>
    )
}

export {Experience}