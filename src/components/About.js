import React from 'react';
import { Container, Segment, Image } from 'semantic-ui-react'


const About = () => {
  return (

    <Container>
      <Segment>
        <h1 className="ui block header center">
          About
        </h1>
        <div>
          <Image src="https://vignette.wikia.nocookie.net/p__/images/f/f3/Bill_schoolhouse_rock.png/revision/latest?cb=20161029171330&path-prefix=protagonist" floated="left"/>
        </div>
        <br/>
        <p>
          Remember <a href="https://www.youtube.com/watch?v=tyeJ55o3El0">School House Rock</a>? They made it fun to learn about the workings of Congress. I'm hoping this app makes it fun to learn about who's who in Congress (however frightening some of their policies may be!) and what they're doing in your name! You can sort Members by party, age, gender and fun facts, like how often they show up to vote and how often they vote the party line, then narrow your search with terms like "female" or "president" etc.
        </p>

        <p>
          Then the fun part: guess who's who! Stumped? Click on "Guess Who?" to reveal the name.
        </p>

        <p>
          You can also click the gavel on any card to get that member's most recent bills, or head over to the Bills page to search for bills by subject. Want to contact your representatives? Each card includes icons for social media, a contact form (if available) and a click-to-call button. Not registered to vote? I added a register to vote widget so you can do that, too.
        </p>

        <h3>Under the Hood</h3>
        <p>
          This app is built with a Ruby on Rails API and a Postgres database on the back end; and with React and Redux on the front end. It is written in JavaScript ES6.  I developed this app for my final portfolio project at the <a href="https://flatironschool.com/">Flatiron School</a>, where I am just about to graduate from the full-time, online, structured engineering immersion course.
        </p>

        <p>
          The front-end was created with the create-react-app generator. It is a Single Page Application, which means that its one page is dyamically re-rendered to show different information as you click on buttons. But it <em> seems </em> to have more than one page because it uses React routing to change the address in the address bar as you shift between the nav buttons. Here is the repo for the project's <a href="https://github.com/joanrig/congress_front_end">Front End</a> and <a href="https://github.com/joanrig/congress_api">Back End</a>.
        </p>

        <h3>Thanks to ProPublica!</h3>
        <p>
          I couldn't have made this app without the data from the non-profit investigative journalism group<a href="https://www.propublica.org/about/">ProPublica</a>, whose data helps power many sites, including Nate Silver's election analysis website <a href="https://fivethirtyeight.com/">FiveThirtyEight</a>.  Remember him? He predicted the election of Donald Trump.
          In case you're curious, this app is based mainly on this <a href="https://www.propublica.org/datastore/api/propublica-congress-api">API</a>. Thank you to the good folks at Propublica for maintaining it, and to the good folks at The New York Times, <a href="https://open.blogs.nytimes.com/2009/01/08/introducing-the-congress-api">who actually started this API in 2009</a>.
        </p>
        <p>
          <h3>Thanks to the Center for Responsive Politics!</h3>
          For data on who donated to which Congress members, I relied on the Center for Responsive Politics and their OpenSecrets campaign finance API. I chose to use their <a href="https://www.opensecrets.org/api/?method=candContrib&output=doc">candidates contributon summary method</a> to display the top three donors to each Congress member's most recent campaign. But that's just the tip of the iceberg. For lots more campaign finance data, including which industries are donating to members of which congressional committees, click on the "source" link at the bottom of the donors list.
        </p>

        <h1>Hire me!</h1>
        <p>
          About me: My name is Joan Indiana Lyness. I'm a <a href="http://joanrigdon.com/">formal journalist</a> (wrote under the name Joan Indiana Rigdon for The Wall Street Journal, Red Herring, ForbesWoman and others). During that time I spent two years cycling around the world <a href="http://online.wsj.com/public/resources/documents/info-wsj10forgotten.html">(and wrote about it for The Wall Street Journal Online)</a>. As for the last 10 years? I spent most of them building and running my own afterschool STEM company, where fabulous instructors teach elementary school kids robotics and programming (and other fun things like Storybook Science!). I live near Washington D.C.
        </p>

        <p>
          <b>Now I'm looking for my first job as a web developer. Yes, that's right, you can hire me. Here's my <a href="https://www.linkedin.com/in/joanrigdon/">LinkedIn profile</a>!</b>
        </p>
        <br/>
        <br/>
        <br/>
      </Segment>
    </Container>

  )
}

export default About;
