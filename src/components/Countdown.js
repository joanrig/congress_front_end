import React, { PureComponent }from 'react'
import { Container, Grid } from 'semantic-ui-react'

class Countdown extends PureComponent {
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
       timeLeft.minutes = Math.floor(diff / secondsPerMinute)
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
      <Grid columns={6}>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column className="countdown">
          <strong>{this.addLeadingZeros(countdown.days)}</strong>
          <br/>
          <br/>
          <span>{countdown.days === 1 ? 'Day' : 'Days'}</span>
        </Grid.Column>
        <Grid.Column className="countdown">
          <strong>{this.addLeadingZeros(countdown.hours)}</strong>
          <br/>
          <br/>
          <span>{countdown.hours === 1 ? 'Hour' : 'Hours'}</span>
        </Grid.Column>
        <Grid.Column className="countdown">
          <strong>{this.addLeadingZeros(countdown.minutes)}</strong>
          <br/>
          <br/>
          <span>{countdown.minutes === 1 ? 'Minute' : 'Minutes'}</span>
        </Grid.Column>
        <Grid.Column className="countdown">
          <strong>{this.addLeadingZeros(countdown.seconds)}</strong>
          <br/>
          <br/>
          <span>{countdown.minutes === 1 ? 'Second' : 'Seconds'}</span>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid>
      <br/>
      <br/>
      <br/>
      <span className="countdown">until Election Day 2020!</span>

      </Container>





    )
  }
}


export default Countdown
