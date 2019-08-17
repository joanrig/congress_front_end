###to do

1. fix bugs below
2. add loading status/ indicators
4. format dollars to include commas.



###ACTIVE BUGS
1. card won't immediate update after fetching finances; you must re-render, re-find card, re-flip.


### FIXED BUGS
BUG: freshman/ freshmen stopped working for house
HOW FIXED: data was updated by propublica to round up time served to 2 years, changed definition of freshmen to those with seniority under 3 years.


BUG - hide bills button would not turn red after senate/house card changed into memberCard -
HOW FIXED: used #id instead of .class in css


#NEXT FEATURES


#NIXED FEATURES
figure out how to flip all cards.  DID IT, but if you can flip all cards at once, you can't flip one at a time.

#ADDED FEATURES
DONE - add countdown until next federal election day.


###STRETCH
* add SASS https://scotch.io/tutorials/using-sass-in-create-react-app-v2


###STRETCH DONE
DONE - abstract almost all house/senate components into member component used by both - container/ actions are ok separate.
DONE - display bills and top donors on back of card
DONE - get top campaign donors
DONE - add search bills by subject
DONE 1. upgrade backend
DONE 2. add button, make fetch action work on front end
DONE add bills by member
https://projects.propublica.org/api-docs/congress-api/bills/#search-bills
DONE - show the info!


###requirements - completed
The Application must make use of react-router and proper RESTful routing
DONE: You should be using fetch() within your actions to GET data from your api
DONE: The code should be written in ES6 as much as possible
DONE: Use the create-react-app generator to start your project.
DONE: Your app should have one HTML page to render your react-redux application
DONE: Use Redux middleware to respond to and modify state change
DONE: Make use of async actions to send data to and receive data from a server
DONE: Your Rails API should handle the data persistence.
DONE: Your client-side application should handle the display of data with minimal data manipulation
DONE: Your application should have some minimal styling
DONE: There should be 2 container components
1. SenatorsContainer
2. HouseContainer
DONE: There should be 5 stateless components
1. NavBar
2. Home
3. SenateSorter
4. HouseSorter
5. About
6. HomePageGraphics
