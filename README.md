## How to run the service
- We running node v20 on this project.

- open any kind of terminal then pick a location where to storage site.
```sh
git clone https://github.com/alexkaasik/ReadingTracker.git
cd ReadingTracker

```
- To run BackEnd/FrontEnd, we need to install some packages to the project. Here npm script to it quickly, if you want to launch the project.
- In command to install all dependencies that need to the project
```sh
npm run WholeProjectInstll
```

- To start the backend and the frontend at the same time
```sh
npm run StartServers
```

- If you want run the BackEnd and FrontEnd separately 
- To install need dependencies for the FrontEnd
```sh
npm run FrontEndInstall
```
- To run the FrontEnd
```sh
npm run FrontEnd
```
- To install need dependencies for the BackEnd
```sh
npm run BackEndInstall
```
- To run the BackEnd
```sh
npm run BackEnd
```


## Authors

- Aleksander Kaasik  [@alexkaasik](https://www.github.com/alexkaasik)

- Mihhail Bajandin  [@mihutka](https://github.com/mihutka)

------------------------------------------------------
## Project team resources:
- [JIRA](https://notryan754.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog?atlOrigin=eyJpIjoiZjg4NTM0ZTlhZjFjNGJhNTg2OTU1MDBjZmI4ZDNiNTAiLCJwIjoiaiJ9)
- [Apicurio](https://studio.apicur.io/apis/112945)
------------------------------------------------------

## API Reference

#### Get all items

```http
  GET /books
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `clients` | `string` | Get a list of all books |

#### Getting item

```http
  GET /books/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to book |

## Database
![image](https://raw.githubusercontent.com/alexkaasik/ReadingTracker/refs/heads/AleksanderKaasik/image.png)
