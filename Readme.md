# Development environment

endpoints:
messages between 2 users: http://localhost:3000/api/messages?users[]=2&users[]=5

users that have conversed with user: http://localhost:3000/users/2/conversed-with

feedDB: http://localhost:3000/api/feedDB

user by properties: http://localhost/api/users?id={id}&firstName={firstName}&lastName={lastName}&birthday={birthday}&gender={gender}&username={username}

i hope it's not too unpleasant to read :)

In order to run application use:
`docker-compose up`
