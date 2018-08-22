# this example of code using KOA to build Rest API with Redis

## how to run and test it?
- clone or down code
- go to directory like $cd ./koa-api-redis
inside root directory of project
## run with docker (Make sure you have docker in your machine)
to run app with docker you just need run command line below
- `$docker build Dockderfile`
- `$docker-compose build`
- `$docker-compose up --force-recreate`
- open your brower and go to localhost:8080/get/"user_id" to get banned work counter of user e.g 
localhost:8080/get/1
- using postman or whatever you want or you has to post http content to localhost:8080/ with conent-type is application/json
and data format must follow 
`{
"user_id": "your data",
"text": "your text data"
}`
## run it on your pc (you must have redis and node engine)
to install all depend, run command below
- `$npm install` 
then run command below to get app up
- `$npm start env REDIS_URL="your redis address"` e.g `$$npm start env REDIS_URL=redis://cache:9376`

