![Build Status](https://codeship.com/projects/88820b80-0279-0137-674b-729c7a751547/status?branch=master)
# HOM

RECRUITERS: Use log in bford@gmail.com and pw brianford to log in as admin

An app for managing real estate related tasks

System dependencies:
    Must have Ruby 2.4.5
    Bundle 2.0
    postgres data base
    on system

Configuration:
  Bundle Install
  yarn Install

Database creation:
  rake db:setup

Database initialization:
  rake db:seed

How to run the test suite:
  yarn run test
  bundle exec rspec

Services:
  Used Rails, React, Foundation 5, make-it-so gem

Deployment:
  Deployed to Heroku and used AWS for photo hosting

App walkthrough:

 1)
    “User can sign in to the website.”
      Technologies used: (Carrierwave, Heroku for hosting, Devise for login)
        added: First and Last Name Fields, Profile photo

 2)
    "User can see a list of rental listings and view listing pins on a map."
      Technologies: CSS animations, Google Maps API Javascript

 3)
    "User can view details and pictures on a specific listing"
      Technologies: CSS animations, React States, onMouse event listeners
        added: image carousel, ability to click picture to update state

  4) "Admin can add/edit/delete listings"      

Created to provide an easy way to upload a listing

Rentals App
An app for managing real estate related tasks

Getting Started
Visit https://welcome-hom.herokuapp.com
for admin privileges sign in with:
email: bford@gmail.com
password: brianford

Examples:
Create a listing

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
