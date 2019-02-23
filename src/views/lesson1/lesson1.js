import React from 'react'
import Title from '../../components/Title'
import './index.scss'

class Lesson1 extends React.Component{
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
                    <h3 className="assignment-title">Explain web programming concept</h3>
                    <section className="question-one">
                        <h5><i>Hypertext Transfer Protocol (HTTP)</i></h5>
                        <p>
                            The hypertext transfer protocol is hypermedia information system transferring files over Would Wide Web.The user can go through hyperlinks to get the resources.
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>Stateless programming</i></h5>
                        <p>
                            Stateless programming is a paradigm in which the operations(functions, methods, procedures, whatever you call them) you implement are not sensitive to the state of the computation.
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>Session management</i></h5>
                        <p>
                            Session management is the rule set that governs interactions between a web - based application and users.Browsers and websites use HTTP to communicate, and a web session is a series of HTTP requests and response transactions created by the same user.
                        </p>
                        <p>
                            Since HTTP is a stateless protocol, where each request and response pair is independent of other web interactions, each command runs independently without knowing previous commands.In order to introduce the concept of a session, it is necessary to implement session management capabilities that link both the authentication and access control(or authorization) modules commonly available in web applications.
                        </p>
                        <p>
                            There are two types of session management– cookie - based and URL rewriting.These can be used independently or together.A web administrator uses session management to track the frequency of visits to a website and movement within the site.
                        </p>   
                    </section>
                    <section className="question-one">
                        <h5><i>Authentication and web security</i></h5>
                        <p>
                            Authentication is the process of identifying an individual, usually based on a username and password.While web security involves authorization, authentication is distinct from authorization, which is the process of giving individuals access to system objects based on their identity.Web security relies on authorization to avoid malicious software and cyber attacks.
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>Client-side programming</i></h5>
                        <p>
                            Client Side programming mostly involves the user interface in which the user interacts with.In web development it’ s the browser, in the user’ s machine that runs the code and its mainly done in java - script, flash, etc.This code must be run in a variety of different browsers.
                        </p>
                    </section>
                </section>
            </div>
        )
    }
}

export default Lesson1