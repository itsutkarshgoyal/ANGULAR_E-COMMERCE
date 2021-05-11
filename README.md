# E-COMMERCE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Live Application
_**Latest** Code is deployed on [Netlify](https://www.netlify.com/) from master branch with all the stable functionalities and accessible at_ [Fashion Store!](https://vigorous-jepsen-aa366e.netlify.app/)
Sample credentials Email : utkarsh@gmail.com , Password: Passw0rd

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Application Walkthough
Application  has following features. 

- [Web Application](###-Web-Application)
    - [Product Desciption Page](####-Product-Detail-Page)
    - [User authentication](####-User-Authentication)
    - [Cart Screen](####-cart-screen)
    - [Checkout Screen](####-checkout-screen)
    - [System Translations](####-translations)
- [Data Handelling](###-Data-Handelling)
- [Unit Testing](###-Unit-Testing)

### Web Application
---
1. **Search Bar**: Using Search bar you can filter the products displayed.

2. **Language Selection**: Adding internationalisation on this application the second button from the top right of the page have the capability to change the labels and genral titles in two different languages (English,French).

3. **Cart Icon**: Displays the products which are added to cart. Only authenticated user can add products to cart.

4. **Login/Logout Page**: User can Login / Logout using this button. Sample credentials Email : utkarsh@gmail.com , Password: Passw0rd

#### _Product Detail Page_
  ---
  User can see the product detials such as price, color, description and authenticated user can add product to cart

#### _User Authentication_
 --- 
  For adding the product and for checkout user has to login first, using this page user can login into the application and redirected to home page.

#### _Cart Screen_
  Only Authenticated user can view this page , using this page user can see the price , subtotal and quantity of product selected. He can also increase the quantity to see the updated price.

#### _Translations_
---
Currenty system supports 2 language (English, French). though translation are only available for labels and buttons it can be changes from language selection menu on the navbar. 

### Data Handelling
---
This application is made purely on  Angular 11 so a temporary memory objects listed below 

1. **localStroage** used to store user data, cart data favourites and other dynamically create data into browser local storage. 
2. **Templates** to access products, categories and user details a json file is created.
3. **Observables/RxJs** to share information across componenets in asynchronous fashion

### Unit Testing
---
Unit test cases for Header Component and Product Service have been written and testes thoroghly. 
`Basic Component creation test case is implemented for all the compoennets`  
