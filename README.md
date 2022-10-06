# frejun - API REFERENCE 
## TO RUN THE APPLICATION 
-`Run following commands`
-`1. open terminal`
-`2. cd your_own_directory`
-`3. RUN - git@github.com:parmeet10/frejun_api.git`
-`4. cd frejun_api`
-`5. npm install `
-`6. npm start`


## URLS
 - `http://localhost:3000/authentication`
 - `http://localhost:3000/blogs`
 - `http://localhost:3000/blogs/update?blogId=1`

 ## 1.ping

 ### Description 

 The reachability of the host can be checked through the Ping API. The API responds with a `pong` to communicate availability to the requesting client.

 ### Method

`GET`

### URL

`/ping`

### Headers

`None`

### Query

`None`

### Body

`None`

### Response Type

`String`

### Response

```
pong
```


 ## 2.Authentication

 ### Description 

 provides token to access other API'S, gives better control and accessibility over the api's 

 ### Method

`GET`

### URL

`/authentication`

### Headers

`None`

### Query

`None`

### Body

`None`

### Response Type

`JSON`

### Response

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGh1IE9jdCAwNiAyMDIyIDEzOjUxOjA1IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlhdCI6MTY2NTA0NDQ2NX0.RP3iAfICoafRhCpk0b4nrD3fk35FicmPguC8NoXyhu0"
}
```

## 3.post blogs

### Description 

 API to post blogs

 ### Method

`POST`

### URL

`/blogs`

### Headers

`x-auth:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGh1IE9jdCAwNiAyMDIyIDEzOjUxOjA1IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlhdCI6MTY2NTA0NDQ2NX0.RP3iAfICoafRhCpk0b4nrD3fk35FicmPguC8NoXyhu0`

### Query

`None`

### Body

```
{
    "body":"somebody told me that alternate string when pulled togethor gives us ample time to eliminate some awesome techniques which were used earlier",
    "title":"someTitle",
    "category":"someCategory"
}
```

### Response Type

`JSON`

### Response

```
{
    "code": "success",
    "error": false,
    "message": "Successful",
    "data": {
        "blogId": 1
    }
}
```


## 3.get list of blogs

 ### Description 

gives the complete list of blogs in the database 

 ### Method

`GET`

### URL

`/blogs`

### Headers

`x-auth:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGh1IE9jdCAwNiAyMDIyIDEzOjUxOjA1IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlhdCI6MTY2NTA0NDQ2NX0.RP3iAfICoafRhCpk0b4nrD3fk35FicmPguC8NoXyhu0`

### Query

`None`

### Body

`None`

### Response Type

`JSON`

### Response

```
{
    "code": "success",
    "error": false,
    "message": "Successful",
    "data": {
        "blogs": [
            {
                "id": 1,
                "title": "someTitle",
                "body": "somebody told me that altern*** string when pulled togethor gives us am*** time to eliminate some awes*** techniques which were used earlier",
                "category": "someCategory",
                "active": 1,
                "created_at": "2022-10-06T08:23:20.000Z"
            },
            {
                "id": 2,
                "title": "someTitle",
                "body": "somebody told me that alternate string when pulled togethor gives us ample time to eliminate some awesome techniques which were used earlier",
                "category": "someCategory",
                "active": 1,
                "created_at": "2022-10-06T08:40:57.000Z"
            },
            {
                "id": 3,
                "title": "someTitle",
                "body": "somebody told me that alternate string when pulled togethor gives us ample time to eliminate some awesome techniques which were used earlier",
                "category": "someCategory",
                "active": 1,
                "created_at": "2022-10-06T08:40:58.000Z"
            },
            {
                "id": 4,
                "title": "someTitle",
                "body": "somebody told me that alternate string when pulled togethor gives us ample time to eliminate some awesome techniques which were used earlier",
                "category": "someCategory",
                "active": 1,
                "created_at": "2022-10-06T08:40:58.000Z"
            }
        ]
    }
}
```


## 4.update blog 

 ### Description 

 update blog body in the DB in accordance with replacing last 3 words of words starting with A or a and returning those words in the response object to client 

 ### Method

`GET`

### URL

`/blogs?blogId=1`

### Headers

`x-auth:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGh1IE9jdCAwNiAyMDIyIDEzOjUxOjA1IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKSIsImlhdCI6MTY2NTA0NDQ2NX0.RP3iAfICoafRhCpk0b4nrD3fk35FicmPguC8NoXyhu0`

### Query

`None`

### Body

`None`

### Response Type

`JSON`

### Response

```
{
    "code": "success",
    "error": false,
    "message": "Successful",
    "data": {
        "wordsWithA": [
            "alternate",
            "ample",
            "awesome"
        ],
        "blogs": [
            {
                "id": 1,
                "title": "someTitle",
                "body": "somebody told me that altern*** string when pulled togethor gives us am*** time to eliminate some awes*** techniques which were used earlier",
                "category": "someCategory",
                "active": 1,
                "created_at": "2022-10-06T08:23:20.000Z"
            }
        ]
    }
}
```
# 'USE POSTMAN TO HIT API'

