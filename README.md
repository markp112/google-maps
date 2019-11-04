# Google-maps

This was a learning project with the goal being to build an application using the Google maps API, this was the first introduction to using an API to retrieve data.

For this project I decided to combine Google Maps with the CIA World Fact book, this present a number of challenges. The fact book exists as a single large JSON file which I downloaded. The first step was to work out what content I wanted to use and where the longitude and lattitude were stored in the file.

I realised early on in the project I would need to build my own http server to process the file and serve up content, having done this before in NodeJs I created a simple node http server to with methods to split the single JSON file into multiple files one per country containing only the content I wanted to show on my applicaiton. I created a coupple of API functions to support the front end, with returning a list of all countries and information for single country.

The application is developed to a point where the user can select a country and have google maps navigate to the country and display the summary information. There is lots more that could be done, however at this point it is developed as far as I want to take it.


# Installation

1. From the command line run git clone https://github.com/markp112/google-maps.git
2. Once the package has cloned type yarn install is using yarn or npm install
3. To run the application type yarn build

