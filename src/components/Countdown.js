import React, { Component }from 'react'
import { Container } from 'semantic-ui-react'

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time_left: {
        days: "",
        hours: "",
        minutes: "",
        seconds: ""
      }
    }
  }

  //update every second
  componentDidMount(){
    this.interval = setInterval(() => {
      const timeUntilElection = this.calculateTimeLeft(this.props.date)
      timeUntilElection ? this.setState(timeUntilElection) : this.stop()
    }, 1000);
   }

  calculateTimeLeft(endDate){
     //diff between end date and now in seconds
     let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date()))/ 1000

     if (diff <= 0) return false

     const timeLeft = {
       days: 0,
       hours: 0,
       minutes: 0,
       seconds: 0,
     }


     // let secondsPerYear = 365.25 * 24 * 60 * 60
     // if (diff >= secondsPerYear){
     //   timeLeft.years = Math.floor(diff / secondsPerYear)
     //   diff -= timeLeft.years * secondsPerYear
     // }

     let secondsPerDay = 24 * 60 * 60
     if (diff >= secondsPerDay) {
       timeLeft.days = Math.floor(diff / secondsPerDay)
       diff -= timeLeft.days * secondsPerDay
     }

     let secondsPerHour = 60 * 60
     if (diff >= secondsPerHour) {
       timeLeft.hours = Math.floor(diff / secondsPerHour)
       diff -= timeLeft.hours * secondsPerHour
     }

     let secondsPerMinute = 60
     if (diff >= secondsPerMinute) {
       timeLeft.hours = Math.floor(diff / secondsPerMinute)
       diff -= timeLeft.minutes * secondsPerMinute
     }

     timeLeft.seconds = diff

     return timeLeft
   }

  stop(){
    clearInterval(this.interval)
  }

  addLeadingZeros(value){
    value = String(value)
    while (value.length < 2){
      value = '0' + value
    }
    return value
  }


  render(){

    const countdown = this.state

    return (
      <Container className="center">
        {this.addLeadingZeros(countdown.days)} -
        {this.addLeadingZeros(countdown.hours)} -
        {this.addLeadingZeros(countdown.minutes)} -
        {this.addLeadingZeros(countdown.seconds)}
      </Container>
    )
  }
}


export default Countdown
