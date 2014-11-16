[brand]: doc/brand.png  "Notfallhelfer"
[t1]: doc/thumb1.png  "First Question"
[t2]: doc/thumb2.png  "Call an Ambulance"
[t3]: doc/thumb3.png  "CPR - Getting Started"
[t4]: doc/thumb4.png  "CPR - Where to place your hands?"
[t5]: doc/thumb5.png  "CPR - Rhythm"

![Notfallhelfer][brand]
**Notfallhelfer** (German *first responder*) is an app to help untrained people save lives in case of a medical emergency.
This project has been developed during the [Health Hack Munich](http://healthhack.de) (November 15-16, 2014) and won the first price.

[![First Question][t1]](https://raw.githubusercontent.com/patbuergin/first-responder/master/doc/1.png) [![Call an Ambulance][t2]](https://raw.githubusercontent.com/patbuergin/first-responder/master/doc/2.png) [![CPR - Getting Started][t3]](https://raw.githubusercontent.com/patbuergin/first-responder/master/doc/3.png) [![CPR - Where to place your hands?][t4]](https://raw.githubusercontent.com/patbuergin/first-responder/master/doc/4.png) [![CPR - Rhythm][t5]](https://raw.githubusercontent.com/patbuergin/first-responder/master/doc/5.png)

### Try it @ http://first-responder.github.io


**Technologies:** [Angular.js](https://github.com/angular/angular.js), [Cordova](https://github.com/apache/cordova-js), [Ionic](https://github.com/driftyco/ionic)

-----

#### Build
```
npm install -g gulp cordova ionic

npm install
gulp
```

##### Run in the Browser
```
ionic serve
```

##### Run in an iOS Simulator
```
ionic platform add ios
ionic build ios
ionic emulate ios
```