import React from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import Animated from 'animated/lib/targets/react-dom'
import Easing from 'animated/lib/Easing'

import logo from '../../img/favicon.ico'
import sass from '../../img/sass-logo-bg.jpg'
import reactCode from '../../img/reactCode.png'
import sassCode from '../../img/sassCode.png'

class Presentation extends React.Component{
    animatedValue = new Animated.Value(0)
    animatedWhy = new Animated.Value(0)
    animatedHow = new Animated.Value(0)
    animatedValueSass = new Animated.Value(0)
    animatedWhySass = new Animated.Value(0)
    animatedHowSass = new Animated.Value(0)
    animateReactCode = new Animated.Value(0)
    animateSassCode = new Animated.Value(0)
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
    showWhatSass=()=>{
        this.animatedValueSass.setValue(0)
        Animated.timing(
            this.animatedValueSass, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showWhy=()=>{
        this.animatedWhy.setValue(0)
        Animated.timing(
            this.animatedWhy, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showWhySass=()=>{
        this.animatedWhySass.setValue(0)
        Animated.timing(
            this.animatedWhySass, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showHow=()=>{
        this.animatedHow.setValue(0)
        Animated.timing(
            this.animatedHow, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showHowSass = () => {
        this.animatedHowSass.setValue(0)
        Animated.timing(
            this.animatedHowSass, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showReactCode = () => {
        this.animateReactCode.setValue(0)
        Animated.timing(
            this.animateReactCode, {
                toValue: 1,
                duration: 2000,
                easing: Easing.elastic(1)
            }
        ).start()
    }
    showSassCode = () => {
        this.animateSassCode.setValue(0)
        Animated.timing(
            this.animateSassCode, {
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
        const marginLeftSass = this.animatedValueSass.interpolate({
            inputRange: [0, 1],
            outputRange: [-120, 0],
        })
        
        const marginLeftWhy = this.animatedWhy.interpolate({
            inputRange: [0, 1],
            outputRange: [-240, 0],
        })
        const marginLeftWhySass = this.animatedWhySass.interpolate({
            inputRange: [0, 1],
            outputRange: [-240, 0],
        })
        const marginLeftHow = this.animatedHow.interpolate({
            inputRange: [0, 1],
            outputRange: [-360, 0],
        })
        const marginLeftHowSass = this.animatedHowSass.interpolate({
            inputRange: [0, 1],
            outputRange: [-360, 0],
        })
        const marginTop = this.animateReactCode.interpolate({
            inputRange: [0, 1],
            outputRange: [-360, 0],
        })
        const marginTopSass = this.animateSassCode.interpolate({
            inputRange: [0, 1],
            outputRange: [-360, 0],
        })
        return(
            <div className="presentation">
                <section className="react_header">
                    <img src={logo} alt="logo" className='react_logo' />
                    <a href="#react_code" onClick={this.showReactCode}><span className="react_title">React</span></a>
                </section>
                <section className="first_part" name="first">
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
                <section className="react_code"  id="react_code">
                    <a href="#second">
                        <Animated.div style={
                            Object.assign(
                                {},
                                {
                                    opacity: this.animateReactCode, marginTop
                                }
                            )
                        }>       
                            <img src={reactCode} alt="react code" className="code_img"/>
                        </Animated.div>  
                    </a>
                </section>
                <section className="sass_header" id="second">
                    <a href="#sass_code" onClick={this.showSassCode}><img src={sass} alt="logo" className='sass_logo' /></a>
                </section>    
                <section className="first_part" name="first">
                    <Row gutter={24}>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title_sass" onClick={this.showWhatSass}>What is Sass(Scss)?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedValueSass, marginLeftSass
                                        }
                                    )
                                }>
                                    <p className="reason_sass">1. Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
                                    <p className="reason_sass">2. It is CSS preprocessor.</p>
                                </Animated.div>   
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title_sass" onClick={this.showWhySass}>Why choose Sass?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedWhySass, marginLeftWhySass
                                        }
                                    )
                                }>
                                    <p className="reason_sass">1. Reusable.</p>
                                    <p className="reason_sass">2. Convenience.</p>
                                </Animated.div> 
                            </div>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <div className="gutter-box">
                                <h2 className="first_part_title_sass" onClick={this.showHowSass}>How do I use Sass in this project?</h2>
                                <Animated.div style={
                                    Object.assign(
                                        {},
                                        {
                                            opacity: this.animatedHowSass, marginLeftHowSass
                                        }
                                    )
                                }>
                                    <p className="reason_sass">1. Use yarn command "yarn add sass-loader node-sass" to install Sass complier.</p>
                                    <p className="reason_sass">2. Create Scss document.</p>
                                </Animated.div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="sass_code"  id="sass_code">
                        <Animated.div style={
                            Object.assign(
                                {},
                                {
                                    opacity: this.animateSassCode, marginTopSass
                                }
                            )
                        }>       
                            <img src={sassCode} alt="sass code" className="code_img"/>
                        </Animated.div>  
                </section>
            </div>
        )
    }
}

export default Presentation