import React from 'react';
import { Grid, Image } from 'semantic-ui-react'


const About = () => {
  return (
    <>
      <h1 class="ui block header">
        About this App
      </h1>
      <p>
        The goal of this app is to make it fun to learn about who's who in Congress (however frightening some of their policies may be!) You can use it to look up your own representatives, or to sort all representatives by party, gender and fun facts, including how often they show up to vote and how often they vote the party line.
      </p>

      <h4>Under the Hood</h4>
      <p>
        It is built with a Ruby on Rails API and a Postgres database on the back end; and with React and Redux on the front end. It is written in JavaScript ES6.  I developed this app for my final portfolio project at the <a href="https://flatironschool.com/">Flatiron School</a>, where I am just about to graduate from the full-time, online, structured engineering immersion course.
      </p>

      <p>
        The front-end was created with the create-react-app generator. It is a Single Page Application, which means that its one page is dyamically re-rendered to show different information as you click on buttons. But it <em> seems </em> to have more than one page because it uses React routing to change the address in the address bar as you shift between the nav buttons.
      </p>

      <p>
        Here is the repo for the project's <a href="https://github.com/joanrig/congress_front_end">Front End</a> and <a href="https://github.com/joanrig/congress_api">Back End</a>
      </p>

      <h4>Thanks to Propublica!</h4>
      <p>
        I couldn't have made this app without the data from ProPublica, which is used as the data source for many sites, including Nate Silver's election analysis website<a href="https://fivethirtyeight.com/">FiveThirtyEight</a>. Remember him? He predicted the election of Donald Trump.
      <p>

      </p>
        (In case you're curious, this app is based mainly on this <a href="https://www.propublica.org/datastore/api/propublica-congress-api">API</a>). Thank you to the good folks at Propublica for maintaining this API, and to the good folks at The New York Times, <a href="https://open.blogs.nytimes.com/2009/01/08/introducing-the-congress-api">who actually started this API in 2009</a>.
      </p>

      <p>
        Next steps: add more ProPublica API calls to include info on the Congress members' commitees and bills. Add a quiz element to see if you can guess who's who based on their state and party, or their rank as the most senior member of Congress, or the most maverick!
      </p>

      <h1>Hire me!</h1>
      <p>
        About me: I'm a formal journalist (Wall Street Journal, Red Herring, ForbesWoman and others); I spent two years cycling around the world (and wrote about it for The Wall Street Journal Online); and I spent the last 10 years building and running my own afterschool STEM company, where fabulous instructors teach elementary school kids robotics and programming (and other fun things like Storybook Science!). <b>Now I'm looking for my first job as a web developer. Yes, that's right, you can hire me. Here's my <a href="https://www.linkedin.com/in/joanrigdon/">LinkedIn profile</a>.</b>
      </p>





    </>
  )
}

export default About;
