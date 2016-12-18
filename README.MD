# Restaraunt API

## How to run the application
### The application can be run from two ways. 
	* Access through PaaS Heroku
	* Run locally through Docker 

#### 1. Run through Heroku
You can access the API through endpoint `https://medullan.herokuapp.com/api`

#### 2. Run locally through Docker 

##### Requirement
  
  * Docker installation with Docker-Compose

##### Setup 
  * Clone https://github.com/dbclkclk/restaurant.git
  * cd to the clone directory until you see a `docker-compose.yml`
  * Run `docker-compose up`
  * Open a new Docker Terminal and Run -> `docker exec -i medullan_database_1 /dev/shm/import.sh`. This is to import test data inside your Mongo DB container
  * Inside the said terminal, run -> `docker exec -it medullan_api_1 node /usr/src/app/server.js`. This is to start your node webserver. 
  * Inside the same terminal, run `docker-machine ip`. Use this **http://IP:8080/api** to access the API. 


## Question 1

Instruction on how to use the API and Assumptions. **Remember for each JSON Request, set "Content-Type":"application/json"**:

#### Step 1

The assumption here is that the mobile app would send a request to get a list of Allergies for a new user. Upon seeing the list, the user would select zero,one or more Allergies; the app would note these selections by noting the `"id"`:

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

##### GET `{endpoint}/products?userid={USER ID FROM Step #2 JSON Response}`

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

Note the second element in the JSON doens't contain an allergy


## Question 2

Integration with Foursquare API. **Remember for each JSON Request, set "Content-Type":"application/json"**


### POST {endpoint}/foursquare/explore

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/search) with the EXCEPTION of ll, use `lat` and `lng` parameters instead. 



### POST {endpoint}/explore

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/explore) with the EXCEPTION of ll, use `lat` and `lng` parameters instead. 


### POST {endpoint}/suggestcompletion

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/suggestcompletion) with the EXCEPTION of ll, use `lat` and `lng` parameters instead. 


### GET {endpoint}/categories

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/categories). 


### POST {endpoint}/trending

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/trending) with the EXCEPTION of ll, use `lat` and `lng` parameters instead. 


### POST {endpoint}/photos

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/photos). 


### POST {endpoint}/events

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/events).


### POST {endpoint}/likes

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/likes).


### POST {endpoint}/nextvenues

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/nextvenues).


### POST {endpoint}/hours

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/hours).


### POST {endpoint}/links

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/links).


### POST {endpoint}/menu

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/menu).


### POST {endpoint}/tips

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/tips).


### POST {endpoint}/listed

In  your request body, you can use the same request parameter as what's in the Foursquare [documentation](https://developer.foursquare.com/docs/venues/listed).