import React from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'

import logo from '../../img/favicon.ico'

class Presentation extends React.Component{
    animatedValue = new Animated.Value(0)
    animatedWhy = new Animated.Value(0)
    animatedHow = new Animated.Value(0)

    showWhat=()=>{
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }

    showWhy=()=>{
        console.log('111')
        this.animatedWhy.setValue(0)
        Animated.timing(
            this.animatedWhy, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }

    showHow=()=>{
        console.log('111')
        this.animatedHow.setValue(0)
        Animated.timing(
            this.animatedHow, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    componentDidMount=()=>{
    
    }
    render(){
        const marginLeft = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-120, 0],
        })
        const marginLeftWhy = this.animatedWhy.interpolate({
            inputRange: [0, 1],
            outputRange: [-240, 0],
        })
        const marginLeftHow = this.animatedHow.interpolate({
            inputRange: [0, 1],
            outputRange: [-360, 0],
        })
        return(
            <div className="presentation">
                <section className="react_header">
                    <img src={logo} alt="logo" className='react_logo' />
                    <span className="react_title">React</span>
                </section>
                <section className="first_part">
                    <Row gutter={24}>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title" onClick={this.showWhat}>What is React.js?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedValue, marginLeft
                                        }
                                    )
                                }>
                                    <p className="reason">1. React is a JavaScript library created by Facebook.</p>
                                    <p className="reason">2. The core of all React applications are components.</p>
                                    <p className="reason">3. React can rapidly update the data when it fetch the data is different from before.(Virtual DOM)</p>
                                </Animated.div>   
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title" onClick={this.showWhy}>Why choose React.js?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedWhy, marginLeftWhy
                                        }
                                    )
                                }>
                                    <p className="reason">1. React is the one of most populate javascript framework.</p>
                                    <p className="reason">2. Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes.</p>
                                    <p className="reason">3. React is all about building reusable components. In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.</p>
                                </Animated.div> 
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title" onClick={this.showHow}>How do I use React.js?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedHow, marginLeftHow
                                        }
                                    )
                                }>
                                    <p className="reason">1. React is a JavaScript library created by Facebook.</p>
                                    <p className="reason">2. The core of all React applications are components.</p>
                                    <p className="reason">3. React can rapidly update the data when it fetch the data is different from before.(Virtual DOM)</p>
                                </Animated.div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default Presentation