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
  Deployed to Heroku and used AWS for cloud storage

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


Built With
Rails
React 3


Versioning
Codeship used for Continuous Integration

Authors
Raj Singh

License
