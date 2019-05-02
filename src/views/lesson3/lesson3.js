import React from 'react'
import Title from '../../components/Title'
import shareGoogleDocs from '../../img/shareGoogleDocs.PNG'
import readOnly from '../../img/onlyViewGoogleDocs.PNG'
import fullAccess from '../../img/fullAccessGoogleDocs.PNG'
import specifcMember from '../../img/specifictoaccess.PNG'
import slackPrivate from '../../img/slackprivate.PNG'
import slackPublic from '../../img/slackPublic.PNG'
import './index.scss'

class Lesson2 extends React.Component{
    constructor(props){
        super(props)
        console.log(props.history.location.pathname)
        let pathName = props.history.location.pathname
        let num = pathName.indexOf('l')
        let currentLesson = pathName.substring(num)
        let n = currentLesson.indexOf('n')
        let arrayNum = currentLesson.substring(++n)
        console.log(arrayNum)
        this.state = {
            currentLesson: arrayNum
        }
    }

    render(){
        const { currentLesson } = this.state
        return(
            <div className="lesson-one">
                <Title lesson={currentLesson}/>
                <section className="lesson-one-content">
                    <h3 className="assignment-title">Git / Github</h3>
                    <section className="question-one">
                        <h5><i>Google Docs</i></h5>
                        <h5>Sharing documents with other team members</h5>
                        <div>
                            <img src={shareGoogleDocs} alt="share google docs" className="screenShots"/>
                        </div>
                    </section>
                    <section className="question-one">
                        <h5>Allowing read-only access to other members</h5>
                        <div>
                            <img src={readOnly} alt="share google docs" className="screenShots"/>
                        </div>
                    </section>
                    <section className="question-one">
                        <h5>Allowing full access to members</h5>
                        <div>
                            <img src={fullAccess} alt="share google docs" className="screenShots"/>
                        </div>
                    </section>
                    <section className="question-one">
                        <h5>Allowing to specific members</h5>
                        <div>
                            <img src={specifcMember} alt="share google docs" className="screenShots"/>
                        </div>
                    </section>
                </section>
                <section className="lesson-one-content">
                    <section className="question-one">
                        <h5><i>Slacks</i></h5>
                        <h5>URL: reactteam-workspace.slack.com</h5>
                        <h5>Channels: 1. project_private 2. project_public</h5>
                        <p>actively communicating in each channel</p>
                        <h3 className="public">Private Channel</h3>
                        <div>
                            <img src={slackPrivate} alt="communicating in slack private channel" className="screenShots"/>
                        </div>
                        <h3 className="public">Public Channel</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>
                        
                    </section>
                    <section className="question-one">
                        <a href="../../file/ReactTeam-Slack.zip"><h5>Click and download the Json file</h5></a>
                    </section>
                </section>
                <section className="lesson-one-content">
                    <section className="question-one">
                        <h5><i>GitHub</i></h5>
                        <h5>URL of personal web page: https://assessment.github.io</h5>
                        <h5>URL of Hello World page: https://github.com/xxx/hello-world/</h5>
                        
                        <h3 className="public">Pull</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>
                        
                        <h3 className="public">Merge</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>

                        <h3 className="public">Commit</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>

                        <h3 className="public">Fork</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>
                    </section>
                </section>
                <section className="lesson-one-content">
                    <section className="question-one">
                        <h5><i>Git</i></h5>
                        
                        <h3 className="public">Pull</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>
                        
                        <h3 className="public">Merge</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>

                        <h3 className="public">Commit</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>

                        <h3 className="public">Fork</h3>
                        <div>
                            <img src={slackPublic} alt="communicating in slack public channel" className="screenShots"/>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default Lesson2