import React from 'react'
import './index.scss'

class Title extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            lessonArray:[
                {
                    lesson: 'Lesson 1',
                    lessonName: 'Lesson 1 - Web Programming Concepts',
                },
            ],
            num: this.props.lesson-1,
        }
    }
    render(){
        const { lessonArray, num } = this.state
        return(
            <div className="titleWrap">
                <h1 className="title">{lessonArray[num].lessonName}</h1>
                <span>Posted on {new Date().toLocaleTimeString()} by Yijun</span>
            </div>
        )
    }
}

export default Title