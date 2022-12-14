import React, { Component } from 'react'
import Data from './starter-code/data.json'
import './Crew.css'
import NavBar from './NavBar'

export default class Crew extends Component {
    constructor(props) {
        super(props)
        this.state = { crew: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.className === 'Commander') {
            this.setState({ crew: 0 })
        } else if (e.target.className === 'Mission Specialist') {
            this.setState({ crew: 1 })
        } else if (e.target.className === 'Flight Engineer') {
            this.setState({ crew: 2 })
        } else if (e.target.className === 'Pilot') {
            this.setState({ crew: 3 })
        }
    }

    render() {
        const crewData = Data.crew[this.state.crew]
        const crewName = crewData.name
        const crewRole = crewData.role
        const crewImage = crewData.images.substring(1)
        const crewBio = crewData.bio
        return (
            <div className='crew'>
                <NavBar />
                <div className='Crew'>
                    <div className='Crew-main'>
                        <div className='Crew-content'>
                            <h4 className='Crew-heading'><span>02</span> MEET YOUR CREW</h4>
                            <h3 className='Crew-role'>{ crewRole }</h3>
                            <h2 className='Crew-name'>{ crewName }</h2>
                            <p className='Crew-bio>'>{ crewBio }</p>
                        </div>
                        <section>
                            <div onClick={this.handleClick} className={this.state.crew === 0 ? 'Commander active' : 'Commander'}></div>
                            <div onClick={this.handleClick} className={this.state.crew === 1 ? 'Mission Specialist active' : 'Mission Specialist'}></div>
                            <div onClick={this.handleClick} className={this.state.crew === 2 ? 'Flight Engineer active' : 'Flight Engineer'}></div>
                            <div onClick={this.handleClick} className={this.state.crew === 3 ? 'Pilot active' : 'Pilot'}></div>
                        </section>
                    </div>
                        
                    <figure className='Crew-image'>
                        <img src={require(`./starter-code${crewImage}`)} alt={crewName} />
                    </figure>
                </div>
            </div>
        )
    }
}