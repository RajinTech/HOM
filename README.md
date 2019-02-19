![Build Status](https://codeship.com/projects/88820b80-0279-0137-674b-729c7a751547/status?branch=master)
# HOM

An app for managing real estate related tasks
  Allows a user to post a listing
  Allows a user to view a listing

Currently switching to Foundation 6 so site is not responsive, best viewed with Macbook Air on fullscre a zoom level of 150%

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
  Used Rails, React, Foundation 5 which most came with the 'make it so' gem from Launch Academy. 

Deployment: 
  Deployed to Heroku and used AWS for photo hosting 

App walkthrough: 
 
 1)
    “User can sign in to the website.”
      Technologies used: (Carrierwave, Heroku for hosting, Devise for login)
        added: First and Last Name Fields, Profile photo

 2)
    "User can see a list of rental listings and view listing pins on a map."
      Technologies: CSS animations, Google Maps API

 3)
    "User can view details and pictures on a specific listing"
      Technologies: CSS animations, React States, onMouse event listeners
        added: image carousel, ability to click picture to update state

Created to provide an easy way to upload a listing

Eventual goals:
  Payment portal with Stripe
  Regional Comparisons with Zillow Api
  Managment tools with Data Visualization
  Social Media Integration
 
