## Project Structure

Here is the project structure:

```
front-app
 |__ client/ (React App Frontend)
    |__ public/
    |__ src/
 |__ backend/ (React App Backend with Express)
    |__ models/
    |__ routes/
    |__ scripts/
 |__ app.js (Express Backend)
 |__ package.json
 |__ Dockerfile
 |__ docker-compose.yml

```

### Install Docker

To make this as easy as possible, we will be using _Docker Compose_ to creat our container.

- If you do not have Docker yet, start by downloading it if you are on a Mac or Windows:
  https://www.docker.com/products/docker-desktop

- Or if you are on a Linux Distribution follow the directions here:
  https://docs.docker.com/compose/install/

- To confirm you have Docker Compose, open up your terminal and run the command below:

```
$ docker-compose --version
docker-compose version 1.26.2, build eefe0d31
```

- Go into the project directory to build and run the container with:

```
$ cd front-app/
$ docker-compose up --build
```

**This may take a few moments**

Navigate to http://localhost:5000 to view the site on the local server.
It should look something like this:

![front-app_react_success](https://user-images.githubusercontent.com/41876764/87258255-09924080-c457-11ea-97bd-40ad8784a00b.png)

### Cleaning up the Container and Image

- To stop the container from running, use `<Ctrl-C>` twice.
- To close down the container use the command:

```
$ docker-compose down
```

- Then to clean up the container and image which we are no longer using use the command:

```
$ docker system prune -fa
```

- Confirm that the container and image is no longer there with:

```
$ docker system df -v
```

## Setting up the `front-app` project manually

- If you either did not want to use Docker or was curious to build the front-app manually follow the directions below.

- Start by installing the dependencies for both Express and React:

```
$ cd front-app/
$ cd client/
$ npm install
$ cd ../backend/
$ npm install
```

Let's first check to see what our React backend.

- To run the React server use the command in backend directory:

```
$ cd backend/
$ npm start
```

You can see that we have the express server running on port `5000`.

- Now in the `client` directory run the command:
  ```
  $ $ npm run-script build
  $ npm start
  ```

```

```
