# MidHeavybot skeleton
 MidHeavybot skeleton template to start building a Discord bot

node.js and npm may need to be installed to run the below

open folder location in a terminal 

npm init -y for jason packages

npm i discord.js

npm install dotenv

npm i -g nodemon

create ".env" file outside the src folder

head over to https://discord.com/developers/applications

create an application and head to bot to create a bot

copy the token id and paste in the .env file (keep this token secure as we dont want it public on github as anyone can write code using your token)

once pasted, in the gitignore file add the .env 

create a discord server, nothing fancy just make one

head back over to our discord bot webpage 

go to OAuth2 and copy client id

than head to this url https://discord.com/api/oauth2/authorize 

now were going to add a query string after that url 

?client_id=YOUR_CLIENT_ID&scope=bot

now lets log the bot in
npm run dev to start nodemon 

now time to have some fun and try out some of the library 
https://discord.js.org/#/docs/main/stable/general/welcome
