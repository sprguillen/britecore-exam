# britecore-exam

As provided by the instructions given by the BriteCore Engineering team, here is my deliverable. 
This is written on VueJS. Sample data from the google doc is hard coded as a reactive data on 
the ./src/components/Dashboard.vue. There it should pass the data as a prop for the datatable 
component. Although the UI is written mostly on Vuetify, the table is in HTML (as per instruction 
that the datatable component should be my own and not from a UI pattern library). It has a simple 
filter + search functionality and responsiveness where on a small browser the table should be stacked. 
The columns are only sortable (one-way: ASC) by clicking the header of each column, it will sort the 
ids, names, descriptions, dates and amounts on ascending order. To edit a description, simply 
click a row and a modal should appear. This modal is a different vue component separate 
from the datatable component.

The project has 2 important components at work: **./src/components/Datatable.vue** and 
**./src/components/EditModal.vue;** please feel free to check, I almost made sure that there are code 
comments. The edit modal component does not directly edit the description, instead it handles the 
display of the modal where the user enter a new description and should pass the data containing the 
new description to the parent using emit (a form of communication from child to parent component in 
VueJS without the use of state management such as VueX or an EventBus). My unit test isn't perfect 
though. Given the short time to work this project and since it's my first time using Vuetify (been 
using Bootstrap-vue on my last project), I wasn't sure if Mocha was the best tool to test Vuetify. 
I thought in the end that I should have used Jest. Hopefully though my work will pass your standards. :)

The project was deployed thru this method: https://cli.vuejs.org/guide/deployment.html#github-pages

Here is the deployed site: https://sprguillen.github.io/britecore-exam/

## Project setup

To install the dependencies just run yarn. Make sure that vue-cli 3 is installed by running ```npm install -g @vue/cli```.


### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
