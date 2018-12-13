# britecore-exam

As provided by the instructions given by the BriteCore Engineering team, here is my deliverable. 
This is written on VueJS. Sample data from the google doc is hard coded as a reactive data on 
the **./src/components/Dashboard.vue**. There it should pass the data as a prop for the datatable 
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
VueJS without the use of state management such as VueX or an EventBus). The datatable component is
semi-adaptable in that it can accept props and display them depending on the props given but in the
real world I would have remove parts of the code where filters are static (I wrote it to cater
specifically on the sample data given). But it will not be much of a hardwork because the framework
is already established to cater. The filters on the datatable in the real world will be adjusted based
on the keys provided by the prop ```items```. Edit modal will also be adjusted in the real world such
as it won't be limited on just the description and will be depending on the keys of the prop ```items```
that is passed to the parent component (Datatable.vue).


My unit test isn't perfect though. Given the short time to work this project (I spent around almost 12 hrs) 
and since it's my first time using Vuetify (been using Bootstrap-vue on my last project) and vue-cli, I wasn't sure
if Mocha was the best tool to test Vuetify. If given more time I would have:

- Experimented and worked with JEST instead of using Mocha, I chose Mocha because of it's full SFC
(Single file component) support yet I wasn't able to see that JEST is recommended for Vuetify and
in some instances (especially on Vuetify wrapped tags) Mocha is unable to fully test the features
of Vuetify (most probably due to compatibility issues).
- Improved my design

In this project I have learned the following techniques:
- How to use the pseudo-selector ```nth-of-type(n):before``` to create a stacked table
- Vuetify
- vue-cli 3 (I was accustomed to work with *vue-webpack-boilerplate*)

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
