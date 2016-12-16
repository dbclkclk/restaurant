# Restaraunt API

## Requirement
  * Docker
  * Docker Compose
  * Clone https://github.com/dbclkclk/restaurant.git 

 ## Setup 
  * CD to the clone directory until you see a `docker-compose.yml`
  * Run `docker-compose up`
  * Open a new Docker Terminal and Run -> `docker exec -i medullan_database_1 /dev/shm/import.sh`. This is to import test data