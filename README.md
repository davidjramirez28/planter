# David's Self Watering Planter System
***

## Introduction
Hello, this is my own project I developed to learn vue, node.js, python, and MariaDB, and gain experience in full stack development. 
This project was created using Vue.js, Node.js, and python. A vue single page web application is created that displays all plants currently in the database including their latin names, common names, and last watered dates. The Node.js application runs the Rest API used to query the database for the list of plants, and update the last watered values. The python script is set up to configure the hardware attached to a RaspberryPi, a moisture sensor(s) and water pump(s) should you wish to add more. The python script will periodically check the moisture levels in the soil and if dry, it shall send a signal to the water pump to push out water for a certain amount of time then update the database with the time. If moist, the script will sleep till it needs to check again.

## Technologies
Vue.js (https://vuejs.org/): Version 2.6.14
Node.js (https://nodejs.org/en/): Version 17.3.1
MariaDB (https://mariadb.com/): Version 10.5.12
RaspberryPi (https://www.raspberrypi.org/): Version: Raspberry Pi 3

## How to Use
Download and install Vue CLI. Copy over src files such as main.js, App.vue and components PlantTable.vue.
Download and install Node.js. Copy over index and express files. You will need to include your own database connection credentials, mine is configured through a .env file.
Set up Vue and Node app to run concurrently to run webservers apps.
Copy over python script and attach hardware to specified pins in script, or can move and reassign on your own.
Run python script and webserver apps.

### Development
This application is still currently under development. Plans to have watering times vary according to the type of plant it is watering, and fix up vue web page. 