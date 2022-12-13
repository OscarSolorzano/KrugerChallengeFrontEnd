# Kruger Challenge Front End

In this project I have created a solution for the Kruger Front-end Challenge. It is 
composed of a Navbar with buttons to navigate trhough the project, a footer, 
a Landing page with a simple description of the functionability of the project, 
a login page, and variuous forms deppending on the type of user. 

The app has been deployed and fully connect with it's API. The demo for the front end can be found here:

https://kruger-challenge-front-end.netlify.app/



## Admins

To Demo the page as an admin use  the following credentials:

        "userName": "user.admin",
        "password": "486d45ea56588e11"

For admins you will be redirected to "/users" where you can see cards of all 
the users who have completed their profile with the options to filtrate the users 
by theit vaccination status, type of vaccine and range of date of the last dose with a 
filter button, and a clear button to clear the filters and see all the users. In each 
card you will have the option to either delete a user or edit the credentials and 
basic information. The eddit  button will redirect you to a page with a form to eddit
the user's information with their previous information as placeholders for the fields, except
for the password wich althoug as an admin you can change, you are not able to see the previous password.

As and admin you also have the option to add users by clicking the option on the navbar, this form
is also validated trough the input tag by the patter property to make sure fields like ID and cellphones are
valid. After filling in all the fields, a Modal with the username and password for the newly created user will appear.

## Employee

To Demo the page as an Employee, login as an addmin and create a user. Log out and  Loggin in with
your new credentials.

As a Employee after loggin in, the site will redirect you depending on if you have completed or not
your vaccination information, if you havent you will be redirected to a form to complete it, and if you have
you will be redirected to a page where you can view your information.

##  Persistence of Data

To recreate a Real world scenario I created and deployed a API. You can see the documentarion here:

https://documenter.getpostman.com/view/22633295/2s8YzUy2k1

##  More About

For this app, I decided not to use libraries like, Bootstrap and MUI since I belive for a small project like this
it was better to showcase my CSS knowledge. 

Redux Toolkit was used in order to manage Global variables.

React-Router-dom was used to protect endpoints.

#Things that can improve

I am aware that a lot of the CSS styles could be reused and better manage, same with the Form strucute, I am aware that some of the functionality
could be modularized in order to have a more understandable code. For the lack of time I coul not  clean up the code. 
But this is just a first instance, as with any project a lot can be improved. Nevertheles I am thankfull for the opportunity and hope to hear from you soon.


## Deployment

To deploy this project run

```bash
  npm run dev
```

