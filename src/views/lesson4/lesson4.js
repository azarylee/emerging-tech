import React from 'react'
import Title from '../../components/Title'
import profile from '../../img/tableau profile.png'
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
                    <h3 className="assignment-title">Visualisation - Tableau Public</h3>
                </section>
                <section className="lesson-one-content">
                    <section className="question-one">
                        <h4><i>Task 3 - Researching Tableau Public</i></h4>
                        <h5 className="question-title">List Three Advantages:</h5>
                        <ol>
                            <li>
                                <h5>Data Visualization</h5>
                                <p>Tableau is a data visualization tool first and foremost. 
                                    Therefore, it's technology is there to support complex computations, data blending and dashborading for the purpose of creating beautiful visualizations that deliver insights
                                    that cannot easily be derived from staring at a spreadsheet. It has climbed to the top of the data visualization heap beacause of it's dedication to this purpose.</p>
                            </li>
                            <li>
                                <h5>Quickly Create Interactive Visualizaions:</h5>
                                <p>Using drag-n-drop functionalities of Tableau, the user can create a very interactive visual within minutes.</p>
                            </li>
                            <li>
                                <h5>Ease of Implementation:</h5>
                                <p>There are many different types of visualization options available in Tableau which enhance the user experience. Also, Tableau is very easy to learn compared to Python,
                                    Business Objects and Domo, anyone without having knowledge of coding can easily learn Tableau.
                                </p>
                            </li>
                        </ol>
                        <h5 className="question-title">Create an online Tableau Public profile</h5>
                        <div>
                            <img src={profile} alt="tableau profile" className="screenShots"/>
                        </div>
                    </section>
                </section>
                <section className="lesson-one-content">
                    <section className="question-one">
                        <h4><i>Task 4 - Researching Tableau Public</i></h4>
                        <p><a href="https://public.tableau.com/views/CO2Emission_15580007915060/1?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link">the published Viz Link </a></p>
                    </section>
                </section>

                <section className="lesson-one-content">
                    <section className="question-one">
                        <h4><i>Task 5 - Connecting Tableau to Google Sheets and Publishing to the web</i></h4>
                        <p><a href="https://public.tableau.com/profile/yijun.li4858#!/vizhome/googlesheets_15580093703570/1_1?publish=yes">the published Viz can updates data once every 24 hours</a></p>
                    </section>
                </section>

                <section className="lesson-one-content">
                    <section className="question-one">
                        <h4><i>Task 6 - Connecting Tableau to Web Data Connector</i></h4>
                        <p><a href="https://public.tableau.com/profile/yijun.li4858#!/vizhome/Earthquake_15580103900850/2_1?publish=yes">the published Viz web data</a></p>
                    </section>
                </section>

                <section className="lesson-one-content">
                    <section className="question-one">
                        <h4><i>Task 7 - Creating Tableau Charts and Publishing to the web</i></h4>
                        <p><a href="https://public.tableau.com/profile/yijun.li4858#!/vizhome/chart_15580114210040/5?publish=yes">the published Viz chart</a></p>
                    </section>
                </section>
            </div>
        )
    }
}

export default Lesson2