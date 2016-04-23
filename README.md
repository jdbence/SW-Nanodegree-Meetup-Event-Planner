# SW-Nanodegree-Meetup-Event-Planner
SPA allows users to create new meetup events

[example]: https://jdbence.github.io/SW-Nanodegree-Meetup-Event-Planner/dist/index.html
[get-zip]: https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner/archive/master.zip
[get-tgz]: https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner/archive/master.tar.gz
[clone-http]: https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner.git
[clone-svn]: https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner
[clone-ghwin]: github-windows://openRepo/https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner
[clone-ghmac]: github-mac://openRepo/https://github.com/jdbence/SW-Nanodegree-Meetup-Event-Planner
[gulp]: http://gulpjs.com
[browsersync]: https://www.browsersync.io
[bower]: http://bower.io/
[polymer]: https://www.polymer-project.org/1.0/
[firebase]: https://www.firebase.com/
[style-commit]: https://udacity.github.io/git-styleguide
[style-js]: http://google.github.io/styleguide/javascriptguide.xml

[Live Example][example]

## Includes

[Gulp][gulp], [Bower][bower], [Browsersync][browsersync], [Polymer][polymer], [Firebase][firebase]

## Collaboration
[Udacity Commit Styleguide][style-commit], [ESLint Google Styleguide][style-js]

## Installation

* Clone git repository via [https][clone-http] or with the Github [Windows][clone-ghwin] or [Mac][clone-ghmac] clients.
* Download as [zip][get-zip] or [tar.gz][get-tgz]
* Checkout with [svn][clone-svn]

### Dependencies

```node
//  Install local dependencies
npm install && bower install
```

### Gulp Tasks

```node
// Start live editing
gulp live
// Build dist version
gulp
// Build github dist version (live preview)
gulp build:github
// Empties dist folder
gulp clean
```

## Simple Server

```node
//  Install globals
npm install http-server -g
//  Start server
http-server -p 8080
```

## License

Project is released under the [MIT License](http://opensource.org/licenses/MIT).
