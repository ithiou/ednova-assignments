
## CREATE STUDENT
Authentication & Authorization & metadata


Base_URL:


POST /students

```json
{
    "firstName" : "Ibrahima",
    "lastName" : "BA",
    "dateOfBirth": "1995-08-10",
    "mobile": {
        "countryCode": "221"
        "number": "77443333EE"
    }
}
```

### Response status 201
```json
{
    "id": 1,
    "firstName": "Ibrahima",
    "lastName": "BA",
    "dateOfBirth": "1995-08-10",
    "mobile": {
        "countryCode": "221"
        "number": "77443333EE"
    }
}  
```

GET /students/{id}

### Response status 201
```json
{
    "id": 1,
    "firstName": "Ibrahima",
    "lastName": "BA",
    "dateOfBirth": "1995-08-10",
    "mobile": {
        "countryCode": "221"
        "number": "77443333EE"
    }
} 
"enrollments": {
    [
        {
            "courseId": "345",
            "semester": "First",
            "startDate": "11-11-2024"
        },
        {
            "courseId": "335",
            "semester": "Second",
            "startDate": "10-10-2024"
        },


    ]
}
```