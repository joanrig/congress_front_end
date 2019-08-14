import React from 'react'
import { Grid, Image } from 'semantic-ui-react'


const HomePageGraphics = (props) => (


  <>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br/>
    Graphic by <a className="left" href="https://www.cosmopolitan.com/politics/a19143923/survey-young-people-primaries-voter-turnout-2018/">Cosmopolitan Magazine</a>
    <br/>
    <br/>
    <br/>
  </>

)


export default HomePageGraphics
