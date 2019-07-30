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
    <h3>Image from <a href="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vote-lead-01-1520883451.jpg?crop=1.00xw:0.752xh;0,0&resize=1600:*">Cosmopolitan Magazine</a></h3>
    <br/>
    <br/>
    <br/>
  </>

)


export default HomePageGraphics
