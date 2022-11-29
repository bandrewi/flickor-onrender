# Flickor
Flickor is a clone of flickr and is a website that allows users to share all sorts of photos. <br>
Live Link: [Flickor](https://dashboard.heroku.com/apps/flickor)

# Index
| [Feature List](https://github.com/bandrewi/solo-project/wiki/Features) | [Database Schema](https://github.com/bandrewi/solo-project/wiki/Database-Schema) | [API Documentation](https://github.com/bandrewi/solo-project/wiki/API-Documentation)

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

# Getting Started
1. Clone this repo
   * `git clone https://github.com/bandrewi/solo-project.git`
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
