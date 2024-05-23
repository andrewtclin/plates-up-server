# Plates-Up Application [Server-Side]

This project is licensed under _MIT_, feel free to reuse it with **original ownership mentioned**.

The server-side of this project is built with _Node.js_ runtime, _express.js_ framework.
* **Swagger** is used to create documentation of the APIs.

For the client-side, please refer to my other repository [_plates-up-client_](https://github.com/andrewtclin/plates-up-client).

---

## Purpose of this Application

Going to the gym has become a common practice for many people, and many of us have a goal when working out. Whether it's to lose weight, gain muscle, or just to stay healthy, we all have a goal in mind. But how do we know if we're making progress?

- Keep in mind that there are many applications out there that provide fancy functionalities, and a lot of times, they are not free. But really, we want a simple application to be able to track our progress.
- This is where Plates-Up comes in, to cut away all the fancy stuff, letting you to focus on your goal and progress.
- The team at Plates-Up is commited to make progress visible for our users, making progress tracking at the gym easy and available for everyone.

This repository contains the **Server-Side** of Plates-Up.

Note that, this project is under _MIT License_, thus, ones are allowed to reproduce it using the source code, with **original ownership mentioned**.

---

## Contribute to this Project

To make contributions or add features to this project:

1. Fork this repository.
2. Add additional features or enhancements to the existing codes.
3. Make a pull request to notify me.
4. You are good to go!

---

## List of Features

This project currently contains the following list of features (**Server-Side** of it):

- Built with MVC architecture, to ensure scalability
  - For a request from the client side (UI), it always has to go through the controller of the backend.
  - The controller will parse the raw request/ data with the model, then the model will return the parsed request to the controller.
  - The controller will then act as the point of contact to interact with the database.
  - The database will act accordingly with the queries from the backend, and return to the controller (MySQL is used).
  - The controller will then return the results back to the UI.

- Main features
  - controllers - the folder that contains each of the different API endpoints.
  - models - the folder that serves as data preprocessing for the controllers, before interacting with the database.
  - database - contains the stored procedures to be executed, depending on the query from the controller.
  - app.js - the overall wrapper function to serve the backend server, using express.js.

- Functionalities
  - Users can create, update, edit, and delete their user accounts.
  - Users can login to the system.
  - Users can create the exercise that they want to track.
  - User can enter the progress of each of the exercise they created.

---

## List of Dependencies

For details of the dependencies, check _package.json_.

In general, this project uses:

- express - the main framework for serving backend apis
- swagger - documentation of APIs
- mysql2 - for mysql database access and functionalities
- bcrypt - the encrypt the password stored in the database

**To install:** install via _package.json_.

> If you are using `npm`, run `npm install`
> If you are using `yarn`, run `yarn`

---

### Description of Architecture

Like previously discussed, the backend is architectured with Model-View-Controller architecture:

- Built with MVC architecture, to ensure scalability
  - For a request from the client side (UI), it always has to go through the controller of the backend.
  - The controller will parse the raw request/ data with the model, then the model will return the parsed request to the controller.
  - The controller will then act as the point of contact to interact with the database.
  - The database will act accordingly with the queries from the backend, and return to the controller (MySQL is used).
  - The controller will then return the results back to the UI.
 
- Structuring MVC architecture:
  - controllers - the folder that contains each of the different API endpoints.
  - models - the folder that serves as data preprocessing for the controllers, before interacting with the database.
  - database - contains the stored procedures to be executed, depending on the query from the controller.
  - app.js - the overall wrapper function to serve the backend server, using express.js.
---

### Reporting Issues

To report issues or bugs, **create a new issue** via _Issue_ tab, it will be reviewed as soon as possible.

- Be sure to write description for the issue that you are facing, so that it can be dealt efficiently.
