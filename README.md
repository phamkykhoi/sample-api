## SUNTECH SIMPLE API
- This is the source make simple API for all beginner Frontend Developer
- It's includes
    - Lowdb
    - ExpressJS Example
- Author: `Khôi Pham`
- Bài viết hướng dẫn: https://suntech.edu.vn/api-danh-cho-frontend-developer.sunpost.html
- Video hướng dẫn: https://youtu.be/oiDx9Y6zUts

## How to Setup
- Step1: Install NodeJs (https://nodejs.org/en/)
- Step2: Run command ```npm install```
- Step3: Start server with command: ```node index.js```
    - Run on local: http://localhost:8000/
- Step4: Install Postman for test API: https://www.postman.com/downloads/

## API infomation
`baseUrl`: `http://localhost:8000`
### 1. List Product

`GET`: `{baseUrl}/api/products`

`Parameters`: No
`Request body`: No
`Response`:
```
[
    .....
    {
        "name": "Test product 3 (test edit)",
        "price": "5000000",
        "description": "product 3",
        "id": "xWbk1Ck9-ba7uQZZiFxpL"
    }
    .....
]
```

### 2. Show Product

`GET`: `{baseUrl}/api/products/:id`

`Parameters`: No
`Request body`: No
`Response`:
```
{
    "name": "Test product name",
    "price": "1000000",
    "description": "Test product description",
    "id": "rovKMQRGxpAUUQet_dE7W"
}
```

### 3. Create Product

`POST`: `{baseUrl}/api/products`

`Parameters`: No
`Request body`:
```
{
    "name": "Iphone 12",
    "price": "25000000",
    "description": "Thông tin chi tiết sản phẩm Iphone 12"
}
```
`Response`:
```
{
    "success": true
}
```

### 4. Update Product

`PUT`: `{baseUrl}/api/products/:id`

`Parameters`: No
`Request body`:
```
{
    "name": "Iphone 12",
    "price": "25000000",
    "description": "Thông tin chi tiết sản phẩm Iphone 12"
}
```
`Response`:
```
{
    "success": true
}
```

### 5. Delete Product

`PUT`: `{baseUrl}/api/products/:id`

`Parameters`: No
`Request body`:
```
{
    "name": "Iphone 12",
    "price": "25000000",
    "description": "Thông tin chi tiết sản phẩm Iphone 12"
}
```
`Response`:
```
{
    "success": true
}
```

### 6. List User

`GET`: `{baseUrl}/api/users`

`Parameters`: No
`Request body`: No
`Response`:
```
[
    .....
    {
        "id": "5YsFNN42B14VYHhpDyizn",
        "name": "Administrator",
        "email": "admin@gmail.com",
        "password": *****
    }
    .....
]
```

### 7. Show User

`GET`: `{baseUrl}/api/users/:id`

`Parameters`: No
`Request body`: No
`Response`:
```
{
    "id": "5YsFNN42B14VYHhpDyizn",
    "name": "Administrator",
    "email": "admin@gmail.com",
    "password": ******
}
```

### 8. Create User

`POST`: `{baseUrl}/api/users`

`Parameters`: No
`Request body`:
```
{
    "name": "Administrator",
    "email": "admin@gmail.com",
    "password": 123456
}
```

`Response`:
```
{
    "success": true
}
```

### 9. Update User

`PUT`: `{baseUrl}/api/users/:id`

`Parameters`: No
`Request body`:
```
{
    "name": "Test user update",
    "email": "userupdate@gmail.com",
    "password": 123456
}
```

`Response`:
```
{
    "success": true
}
```

### 10. Delete User

`DELETE`: `{baseUrl}/api/users/:id`

`Parameters`: No
`Request body`: No

`Response`:
```
{
    "success": true
}
```

### 11. Login

`POST`: `{baseUrl}/api/login`

`Parameters`: No
`Request body`:
```
{
    "email": "userupdate@gmail.com",
    "password": 123456
}
```

`Response`:
```
{
    "user": {
        "id": "id",
        "name": "Test user update",
        "email": "userupdate@gmail.com",
    },
    token: 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI....'
}
```
