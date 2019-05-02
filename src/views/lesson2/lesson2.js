import React from 'react'
import Title from '../../components/Title'
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
                    <h3 className="assignment-title">Explain Internet Principles</h3>
                    <section className="question-one">
                        <h5><i>Client/Server Model</i></h5>
                        <p>
                            <b>Client– server model</b> is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.
                        </p>
                        <p>
                            Often clients and servers communicate over a computer network on separate hardware, but both client and server may reside in the same system.
                        </p>   
                        <p>
                            A server host runs one or more server programs which share their resources with the clients.A client does not share any of their resources, but requests a server’ s content or service
                            function.
                        </p>
                        <p>
                            Clients therefore initiate communication sessions with servers which await incoming requests.Examples of computer applications that use the client - server model are Email, network printing, and the World Wide Web.
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>Internet Protocols</i></h5>
                        <p>
                            <b>The Internet Protocol (IP)</b> is the method or protocol by which data is sent from one computer to another on the Internet.Each computer(known as a host) on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet.
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>TCP/IP</i></h5>
                        <p>
                            <b>TCP/IP</b>, or the Transmission Control Protocol/Internet Protocol, is a suite of communication protocols used to interconnect network devices on the internet. TCP/IP can also be used as a communications protocol in a private network (an intranet or an extranet).
                        </p>
                    </section>
                    <section className="question-one">
                        <h5><i>Domain Name Server(DNS)</i></h5>
                        <p>
                            <b>The Domain Name System (DNS)</b> is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It associates various information with domain names assigned to each of the participating entities. 
                        </p>
                    </section>
                </section>
            </div>
        )
    }
}

export default Lesson2