# Martial Arts contest system 
The aim of this project is creating a web application to track the ongoing of a martial arts contest

## To run project
run 
```
    docker-compose build && docker-compose up -d
```
## To down project
run 
```
    docker-compose stop
```
## To run migrations 
to generate migration file run 
``` 
docker-compose run backend alembic revision --autogenerate -m "custom-message"
``` 
to run migration
``` 
     docker-compose run backend alembic upgrade head
```

# TODO:
## API
- Add Tournament table(think about the design) 
- Add tables digram 
- Add category logic 

## APP
- Create APP base using Starting point
- Create login page
- Create create players page 
- Create main page 

    
