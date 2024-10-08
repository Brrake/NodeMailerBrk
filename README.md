# NodeMailerBrk

This App is an easy example of integrating a Email Server into a Node.js App

Repository GITHUB : [NodeMailerBrk](https://github.com/Brrake/NodeMailerBrk)

## Requirements

For the installation we need to use the following versions of :

Node.JS : [v20.13.1](https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi)

## Installation

First of all you need to install the library running :

```
 npm i
```




## Environment Variables
Before start the server we need to set the correct environment variables regarding our email server.
Below you will find all the information you need to correctly use the templates and the various components

#### Input

| Property          | Type               | Default                         | Description                                                                         | Required |
|-------------------|--------------------|---------------------------------|-------------------------------------------------------------------------------------|----------|
| `APP_NAME`        | `string`           | `NodeMailerBRK`                 | App and Emails name                                                                 | true     |
| `PORT`            | `number`           |`8080`                           | Local server running port                                                           | true     |
| `MAIL_HOST`       | `string`           | `mail.mailserver.com`           | Email Server SMTP address or host name                                              | true     |
| `MAIL_PORT`       | `number`           |`465`                            | Email Server SMTP port                                                              | true     |
| `MAIL_SECURE`     | `boolean`          | `true`                          | Email Server SMTP secure auth                                                       | true     |
| `MAIL_USER`       | `string`           | `info@mailserver.com`           | Email Server SMTP username, tipically an email                                      | true     |
| `MAIL_PASS`       | `string`           | `123456789`                     | Email Server SMTP password                                                          | true     |
| `MAIL_DEFAULT`    | `string`           | `test.receiver@mailserver.com`  | Email where send test email if subject or to parameters of api call are not set     | true     |


## Starting

Run the following command to start the server :

```
 npm start
```

Try now to reach the local server from your browser typing [`http://localhost:8080`](http://localhost:8080)

If you see these result into your browser page then your app is running correctly :

```
 {"message":"NodeMailer BRK application."}
```

You are now able to make post requests to the email endpoint 

## Endpoints


| Endpoint          | Type      | Payload                         | Description                       | Required |
|-------------------|-----------|---------------------------------|-----------------------------------|----------|
| `/`               | `GET`     | ``                              | Get main page                     | true     |
| `/email`          | `POST`    |[`EmailPayload`](#emailpayload)  | Send email using setted envs      | true     |

#### EmailPayload

| Field     | Type      | Example                         | Description                       | Required |
|-----------|-----------|---------------------------------|-----------------------------------|----------|
| `subject` | `string`  | `Messaggio Ricevuto!`           | Subject of the email              | true     |
| `to`      | `string`  | `test.receiver@mailserver.com`  | Email that will receive the email | true     |

