import React from 'react';
import { Container, Image } from 'semantic-ui-react'


const About = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 class="ui block header">
          About
        </h1>
        <br/>
        <Image class="inline-image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/justabill-1445706901.jpg?resize=*:2637"/>
        <br/>
        <p>
          I grew up with School House Rock, which made it fun to learn about the workings of Congress. In that spirit, I'm hoping this app to makes it fun to learn about who's who in Congress (however frightening some of their policies may be!) In addition to looking up your own representatives and sorting them by party and gender you can also sort them by fun facts, like how often they show up to vote and how often they vote the party line.
        </p>

        <h3>Under the Hood</h3>
        <p>
          This app is built with a Ruby on Rails API and a Postgres database on the back end; and with React and Redux on the front end. It is written in JavaScript ES6.  I developed this app for my final portfolio project at the <a href="https://flatironschool.com/">Flatiron School</a>, where I am just about to graduate from the full-time, online, structured engineering immersion course.
        </p>

        <p>
          The front-end was created with the create-react-app generator. It is a Single Page Application, which means that its one page is dyamically re-rendered to show different information as you click on buttons. But it <em> seems </em> to have more than one page because it uses React routing to change the address in the address bar as you shift between the nav buttons.
        </p>

        <p>
          Here is the repo for the project's <a href="https://github.com/joanrig/congress_front_end">Front End</a> and <a href="https://github.com/joanrig/congress_api">Back End</a>
        </p>

        <h3>Thanks to Propublica!</h3>
        <p>
          I couldn't have made this app without the data from ProPublica, which is used as the data source for many sites, including Nate Silver's election analysis website<a href="https://fivethirtyeight.com/">FiveThirtyEight</a>. Remember him? He predicted the election of Donald Trump.
        </p>

        <p>
          In case you're curious, this app is based mainly on this <a href="https://www.propublica.org/datastore/api/propublica-congress-api">API</a>. Thank you to the good folks at Propublica for maintaining this API, and to the good folks at The New York Times, <a href="https://open.blogs.nytimes.com/2009/01/08/introducing-the-congress-api">who actually started this API in 2009</a>.
        </p>

        <p>
          Next steps: add more ProPublica API calls to include info on the Congress members' commitees and bills. Add a quiz element to see if you can guess who's who based on their state and party, or their rank as the most senior member of Congress, or the most maverick!
        </p>

        <h1>Hire me!</h1>
        <p>
          About me: I'm a <a href="http://joanrigdon.com/">formal journalist</a> (Wall Street Journal, Red Herring, ForbesWoman and others); I once spent two years cycling around the world <a href="http://online.wsj.com/public/resources/documents/info-wsj10forgotten.html">(and wrote about it for The Wall Street Journal Online)</a>; and I spent the last 10 years building and running my own afterschool STEM company, where fabulous instructors teach elementary school kids robotics and programming (and other fun things like Storybook Science!).
        </p>

        <p>
          <b>Now I'm looking for my first job as a web developer. Yes, that's right, you can hire me. Here's my <a href="https://www.linkedin.com/in/joanrigdon/">LinkedIn profile</a>!</b>
        </p>
        <br/>
        <br/>
        <br/>
      </Container>
    </div>

  )
}

export default About;
