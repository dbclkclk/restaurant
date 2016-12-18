# Restaraunt API

## How to run the application
### The application can be run from two ways. 
	* Access through PaaS Heroku
	* Run locally through Docker 

#### 1 Run through Heroku
You can access the API through endpoint `https://medullan.herokuapp.com/api`

#### 2 Run locally through Docker 
##### Requirement
  * Docker installation with Docker-Compose
##### Setup 
  * Clone https://github.com/dbclkclk/restaurant.git
  * cd to the clone directory until you see a `docker-compose.yml`
  * Run `docker-compose up`
  * Open a new Docker Terminal and Run -> `docker exec -i medullan_database_1 /dev/shm/import.sh`. This is to import test data inside your Mongo DB container
  * Inside the said terminal, run -> `docker exec -it medullan_api_1 node /usr/src/app/server.js`. This is to start your node webserver. 
  * Inside the same terminal, run `docker-machine ip`. Use this http://IP:8080 to access the API. 


## Question 1

### Instruction on how to use the API & Assumptions

#### Step 1

The assumption here is that the mobile app would send a request to get a list of Allergies for a new user. Upeon seeing the list, the user would select zero,one or more Allergies; the app would note these selection by noting `"id"`:

##### GET `{endpoint}/allergies`

##### JSON Response
```
[{
"name": "Tomane allergy",
"severity": 3,
"severityDescription": "Out of a scale of 1-5 (1 being the highest), tomane poisoning can cause swollen lips. This allergy usually comes from tomatoes",
"id": "5143afc66d44e1ceb372121e"
}]
```


#### Step 2

At this point, the user will register along with his allergy preferences. See below:

##### POST `{endpoint}/user`

##### JSON Request
```
{
  	"name":"name of user",
    "age":20,
    "allergies": ["5143afc66d44e1ceb372121e", "5853f92b476f7407f25f327f"]
}
```

##### JSON Response
```
"/user:58568b1eab9c1b820246e879"
```


#### Step 3

At this point, when the user makes a request to `products` endpoint, the API will respond with a JSON containing products with conditional allergies that the user is allergice to. If the user isn't allergice to a product, then the inner allergic response will be empty. 

##### GET `{endpoint}/products?userid={ID FROM Step #2 Response}`

##### JSON Response
```
[
	 {
		"allergies": 
		[
	  		{
				"name": "Shell fish allergy",
				"severity": 1,
				"severityDescription": "Out of a scale of 1-5 (1 being the highest), shell fish poisoining is very catastrophic",
				"id": "5853f92b476f7407f25f327f"
			}
		],
		"name": "Crab cakes",
		"imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JiufwtkYm1sN77z7Oo3c4LkSuhGNN9Knl1dWkPMC8zc0S2Cp8Q",
		"description": "A large delicious beef hamburger ",
		"ingredients": 
		[
	  		"crab meat",
	  		"gluton free flour",
	  		"unions",
	  		"vinigar"
		],
		"id": "585404fc476f7407f25f32a9"
	},
	{
		"allergies": [],
		"name": "coke",
		"imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDdqiVeRrYZE2S1dkou9AAodxTsot9lksAiHqnVRh32ZOP9YiPKQ",
		"description": "Refreshing 2 Litre cook",
		"ingredients": [
		  "sugar",
		  "carbonated water",
		  "aspertame"
		],
		"id": "585404fc476f7407f25f32a4"
	}
]

```

Note the second element in the JSOn doens't contain an allergy


## Question 2

Integration with Foursquare API


### POST {endpoint}/foursquare/explore

##### JSON Request
```
{
  	"near":"name of user",
    "llAcc":"",
    "alt": ""
}
```

