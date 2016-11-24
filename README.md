# Meal ordering coordination system
[![Build Status](https://travis-ci.org/w0st/mocs.svg?branch=master)](https://travis-ci.org/w0st/mocs)
[![Heroku](heroku-badge.png)](https://mocs-angular2.herokuapp.com/)
### Model
Proposition for conceptual model

![Conceptual model](model.png)

### Accepted rules
Directory **api** contains source code related to back-end part of the system.

Directory **angular** contains files connected with front-end part.

Similar rules apply to the commit messages.

Active order has status: Created/Finalized/Ordered

History order has status: Delivered/Canceled


### Tests
I've prepared a few specs for controllers and models using rspec.
You can execute them by: ```rspec spec/``` inside ***api*** directory.

### Notices

I've tried [angular2-jsonapi](https://github.com/ghidoz/angular2-jsonapi), but at the time isn't too stable...

datatable-row-detail-template not working with nested *ngFor.

### How start?
####Back-end
```
cd /api
bundle install
rake db:setup
rails s
```
####Front-end
```
cd /angular
npm install
npm start
```
Remember setting ```ENV['GITHUB_KEY']``` and ```ENV['GITHUB_SECRET']```!
Check also files: `angular/src/app/home.html` and `api/app/controllers/sessions_controller.rb`

The Heroku version is available [here](https://mocs-angular2.herokuapp.com/).

In Heroku version are few differences  to meet requirements OAuth mechanism.