# E-commerce-back-end-ORM  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
## Description

This application was created to proved a backend for an E-Commerce website. Incorporating technologies Express.js, Node.js, and Sequelize.

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## User Story
AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies  

## Acceptance Criteria
GIVEN a functional Express.js API  
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file  
THEN I am able to connect to a database using Sequelize  
WHEN I enter schema and seed commands  
THEN a development database is created and is seeded with test data  
WHEN I enter the command to invoke the application  
THEN my server is started and the Sequelize models are synced to the MySQL database  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags  
THEN the data for each of these routes is displayed in a formatted JSON  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core  
THEN I am able to successfully create, update, and delete data in my database  

## Installation
  MySQL - MAC --  
  brew install mysql  
  The server is set up without a default root password. You can connect to it using the following command:  
  mysql -u root  
  Important: You should change the root password after you install MySQL Server. You can do this with the following command:  
  mysql_secure_installation  
    
  MySQL -PC
  MySQL https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/   
  PC users: if you get the error “command not found” please refer to the SQL documentation on customizing the PATH   
  https://dev.mysql.com/doc/mysql-windows-excerpt/5.7/en/mysql-installation-windows-path.html  
  Install MySQL Shell
  https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-getting-started.html

  Clone - git clone git@github.com:KevinRhode/svg-logo-gen.git  
  Node.js - Verison 16.18.0  
  [DownloadLinks](https://nodejs.org/download/release/v16.18.0/)  
  Install Node.js, once done move onto next
  Navigate to index.js file location in terminal  
  npm - npm install  


## Usage

Navigate to index.js file location in terminal  
mysql -u root -p
enter the password you set up

once in mysql
SOURCE db/schema.sql;
enter
type: quit
enter

To Seed

npm start

this will start the program, and can begin testing the endpoints

[Demo](https://drive.google.com/file/d/1hTRu2M18fXk5AfFFAsYQb4uPQYd-sajA/view)  

## Credits

[Kevin Rhode](https://github.com/KevinRhode)

## License

MIT License - https://choosealicense.com/licenses/mit/

