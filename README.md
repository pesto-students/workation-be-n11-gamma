<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://workationpesto.s3.amazonaws.com/Screenshot+(227).png" alt="Logo" width="400" height="200" style="background" >
</p>

Workation is a web application where people like us, who love to explore the world but can't leave the work aside, can book the special rooms, flats for a long span in minimum expenses with all the required ameneties for the vacations while working.
<br/>


## Table of Content

   ###### 1. [Installation](#installation)
   ###### 2. [Technology Stack](#technology-stack)
   ###### 3. [Authors](#authors)
   ###### 4. [License](#license)

## Installation
```
    1. Clone repo:
        - git clone https://github.com/pesto-students/workation-be-n11-gamma
     
    2. Install npm packages
        - cd workation-be-n11-gamma && npm install
       
    3. Add Environment variables
        ``` 
        COOKIE_SECRET = ''
        PORT = ''
        MY_SALT = ''
        AWS_BUCKET_NAME = ''
        AWS_BUCKET_REGION = ''
        AWS_ACCESS_KEY = ''
        AWS_SECRET_KEY = ''
        NODEMAILER_USER = ''
        NODEMAILER_PASS = ''
        RAZORPAY_KEY_ID = ''
        RAZORPAY_SECRET = ''
       ```
    4. Add service_firbase.json file
      
       ```
       {
        "type": "",
        "project_id": "",
        "private_key_id": "",
        "private_key": "",
        "client_email": "",
        "client_id": "",
        "auth_uri": "",
        "token_uri": "",
        "auth_provider_x509_cert_url": "",
        "client_x509_cert_url": ""
        }

       ```
        
    5. Run
        - npm run start:local
    
    6. The application will run on http://localhost:8080 in the browser.
```   

## Technology Stack
```
1. Node
2. Express
3. JWT Token
4. Firebase Database
5. Heroku
6. Nodemiler
7. s3Bucket
8. Razorpay
```

## Authors

   - [Rishabh Verma](https://github.com/rishabh-verma-au3)
   - Aman Shah

## License

   - [MIT](https://opensource.org/licenses/MIT)


