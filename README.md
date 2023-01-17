# Expense Tracker

## Poject Desrciption:

Expense Tracker is a web Application  made of using Javascript's very popular library React-js using Material-UI,React-Hooks, Nodejs(API), MongoDB including both client side and server side.This application basically track the monthly income and their expenses.  It have a two sections one for Tracking our expense including(income Transaction & Expense Transaction sections) when click on button modelBox will display containing form to add new income and expense when we submit form data will be save on back-end side(mongoDB), and have Transaction History section which display last 5 transactions(data is coming from mongoDB database in form of API and after fetching API data is displayed) also contains delete button to delete Transaction data permanently from database. And second section contain Search Transaction History it have calender which is able to display only 1 months days(jan 2023) when click on any particular day it display transaction information made on that day if no transaction present it display "No data is available".

## Technology Used:
### For Front-end:
- React JS : React JS is a Javascript library used to develop the application.
- Reactjs Hooks: Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
Hooks used- useState, UseEffect, Redux.
- Material-UI : Some Material-UI components like Icons, Typography , MakeStyle, Button, Styled, Box, Card, Model, CardContent,TextField, DesktopDatePicker,LocalizationProvider ,AdapterDayjs, dayjs,ListItem, ListItemText, styled, ListItemIcon, Divider is Used.
- Javascript :
- JSX : Javascript XML is used to structure the page.
- Material CSS : MUI makestyle is used to style the page and make it more beutiful and attractive.
- Basic CSS: used to provide basic comfortability to website.

### For Back-end:
- Nodejs- JavaScript runtime environment and library for running web applications outside the client's browser.Node.js uses JavaScript on the server.
- Express - Framework of Nodejs help us to create a http server.
- Cors - JS Library allow us to share data between two different origin.
- Dotenv - module allow us to store secret credential of documents.
- Mongoose - Allow us to work with mongoDB.
- Nodemon- Allow us to restart the server whenever we make changes in it. 

## API
- In this project whatever data is used it is fetched from API url which was hosted on localserver.
- So first need to run localserver to get API.
- Run project(Expense-Tracker) available on github. URL for it: https://github.com/ShiRitika/Expense-Tracker
- open Expense-Tracker project go inside back-end folder and run the command on terminal "npm start".
![severTerminal](ReadmeImages\severTerminal.png) like this..
to run project & get API

## APIs URL
-To get Income Transaction Data- http://localhost:8080/api/income.
-To get Expense Transaction Data- http://localhost:8080/api/expense.

## Fetching API
- RTK Query Tool(Provided by Redux ToolKit) to fetch API.
- RTK Query Tool :- one can easily fetch data from server without worrying about updating react component it automatically update it. It is advanced fetching & catching tool design to simplyfy common case & loading data in web App.

## What I've Learnt :
- About some material-UI components and how to used them.
- How to apply material CSS using makestyle in same js files.
- Setup of  React-js, material-UI installation.
- Setup ES Lint and identifying its error and resolving them.
- writing clean and structure code.
- How to use props.
- implementation of ES6 Features: Ternary Operator, Destructuring ,filter, Reduce & Map functions.
- how to use useState, UseEffect, onClick event handling, Button toggle etc.
- How to fetch data from API using RTK query tool(advanced fething technique).
- Creating nodeAPIs

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Home - Page

Home Screen
![Home-Page](ReadmeImages\HomePage.png)

## Project Includes:
- Add Income/Add Expenses Button:- when user click over this button Model screen containing form will render.

### Add Income Model Box
![Add Income Model](ReadmeImages\AddIncomeModel.png)
-From Here user can add their Income and Expenses. Both fields are mandatory.

### Add Income/Expense
![Income/Expense](ReadmeImages\Income&Expense.png)
- Income/Expense:- When user add Income in their account that income get added into income. If user add any expenses, then that money gets added in expenses.
- Balance:- this is the difference between Total Income and Total Expenses 
-Transaction History: In this section have last 5 transaction. If transaction is credited, then it will be Green with +sign before the amount. If transaction is for expenses, then will be in red with – sign. 

### Search Transaction History
![Search Transaction](ReadmeImages\SearchHistory.png)
- Search Transaction History:- When click on calender feild, you are ble to see only current month dates. 

![Search](ReadmeImages\search.png)
user can chose any date once date selected inside Transaction Info section  all the expenses and Income Information will render,
![info](ReadmeImages\info.png)
 If no transaction present on particular date it will show "no data is available".

![invalid](ReadmeImages\invalid.png)
