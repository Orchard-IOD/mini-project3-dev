## Mini Project 3
#### Group project

Stack:
+ Node 
+ Express 
+ Mongoose 
+ CORS 


App requirements:
+ User enters ingredients in a React form.
+ backend calls Forkify API to search recipes using those ingredients.
+ User chooses a recipe.
+ Recipe is saved to their MongoDB user account.

App structure:
backend/
	config/dbConnect.js
	controllers/
		index.js
		recipeController.js
		userController.js
	models/
		index.js
		recipe.js
		user.js
	routes/
		recipeRoutes.js
		userRoutes.js
	server.js

frontend/
	node_modules/
	public/
	src/
	index.html
	package.json
	README.md
	vite.config

node_modules/
.gitignore
package.json
README.md
