# Flickor
Flickor is a clone of flickr and is a website that allows users to share all sorts of photos. <br>
Live Link: [Flickor](https://flickor.onrender.com/)

# Index
| [Feature List](https://github.com/bandrewi/flickor-onrender/wiki/Features) | [Database Schema](https://github.com/bandrewi/flickor-onrender/wiki/Database-Schema) | [API Documentation](https://github.com/bandrewi/flickor-onrender/wiki/API-Documentation)

# Technologies Used

* Javascript
* React
* Redux
* Node
* Express
* PostgreSQL
* Sequelize
* HTML
* CSS
* Git
* VScode

# Technical Implementation
When cloning Flickr I knew I had to incorporate the iconic splash page with the image gallery slideshow. To do this, I used an useEffect function and a setInterval function to create a set time for the photos to switch from one to another. 

![image](https://github.com/bandrewi/flickor-onrender/assets/92858393/60c5191c-7838-4a92-a898-411342d699ec)

Another feature I wanted to incorporate into my clone is the custom image gallery. The custom gallery allows users to view any image in their collection and view the next or the previous image.

![image](https://github.com/bandrewi/flickor-onrender/assets/92858393/b9f956bd-3b59-4c5e-aa3c-41301cc4b47d)

![image](https://github.com/bandrewi/flickor-onrender/assets/92858393/f737c5ae-aa75-4e8f-8d42-8ebaffede5aa)

# Getting Started
1. Clone this repo
   * `git clone https://github.com/bandrewi/flickor-onrender.git`
2. Install dependencies from the root directory
   * npm install
3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
   * `CREATE UESR <name> WITH CREATEDB PASSWORD <'password'>
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.
5. Enter your username and password information into the .env file along with a database name, a secure JWT_SECRET, and a port # (preferably 5000).
6. Add a proxy to the package.json file in the frontend directory. The proxy port should match up with the port you specified in the .env file. If you chose 5000 add the following proxy.
   * `"proxy": "http:/localhost:5000"`
7. Create Database, Migrate, and Seed models
   * `npx dotenv sequelize db:create`
   * `npx dotenv sequelize db:migrate`
   * `npx dotenv sequelize db:seed:all`
8. Start the application by running npm start in the backend and then the frontend directories
   * `npm start`
9. After running npm start in the frontend directory, the project should open in your default browswer. If this not happen, then you can navigate to http://localhost:3000 to access the project
10. You can access the website as a demo user via the demo login button or create an account and login with that.

# Features
Logged in users can perform the following actions:
  * View/Add/Edit/Delete Photos
  * View/Add/Delete Favorites
