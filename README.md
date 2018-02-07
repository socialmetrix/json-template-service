# Json Template Service

Simple HTTP docker service to render a Json template from Json data.

Templating provided by:
[Select Transform](https://github.com/SelectTransform/st.js)

## Usage
Send a `POST` request with a json object including a `data` and `template` fields.

```bash
docker run -d -p 8080:80 socialmetrix/json-template-service
```

Request
```json
{
  "data":{
    "items":[1,2,3,100,10,19]
  },
  "template":{
    "labels":{
      "{{#each items}}":{
        "type":"label",
        "text":"{{this}}"
      }
    }
  }
}
```

Response
```json
{
  "labels":[
    {
      "type":"label",
      "text":1
    },
    {
      "type":"label",
      "text":2
    },
    {
      "type":"label",
      "text":3
    },
    {
      "type":"label",
      "text":100
    },
    {
      "type":"label",
      "text":10
    },
    {
      "type":"label",
      "text":19
    }
  ]
}
```

### Template syntax
[https://selecttransform.github.io/site/transform.html](https://selecttransform.github.io/site/transform.html)

#### Template examples

##### Return the content with no change
```json
{
  "data":"Original Content",
  "template":"{{this}}"
}
```

##### Iterate over arrays
```json
{
  "data":{
    "items":[1,2,3,100,10,19]
  },
  "template":{
    "labels":{
      "{{#each items}}":{
        "type":"label",
        "text":"{{this}}"
      }
    }
  }
}
```

##### Extract values
```json
{
  "data":{
    "user":{
      "firstName": "Victor",
      "middleName": "Ignacio",
      "lastName": "Perez"
    }
  },
  "template":{
    "name": "{{user.firstName}} ({{user.firstName[0]}}.{{user.middleName[0]}}.{{user.lastName[0]}})."
  }
}
```

```json
{"name":"Victor (V.I.P.)"}
```

#### Test
[Try the library online](https://selecttransform.github.io/playground/)
