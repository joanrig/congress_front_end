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
    <br/>
  </>

)


export default HomePageGraphics
