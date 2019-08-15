import React, { PureComponent } from 'react'
import { Grid, Image } from 'semantic-ui-react'


class HomePageGraphics extends PureComponent {
  constructor(props){
    super()

  }

  render(){

    let column =
    <Grid.Column>
      <Image src={this.props.image} />
    </Grid.Column>

    let row =
      <Grid.Row>
        {column}
        {column}
        {column}
      </Grid.Row>

    return(
      <>
        <Grid columns={3} divided>
          {row}
          {row}
          {row}
        </Grid>
        <br/>
        Graphic by <a className="left" href="https://www.cosmopolitan.com/politics/a19143923/survey-young-people-primaries-voter-turnout-2018/">Cosmopolitan Magazine</a>
        <br/>
        <br/>
        <br/>
      </>
    )
  }
}


export default HomePageGraphics
