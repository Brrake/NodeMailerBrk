# NodeMailerBrk

NodeMailerBrk is a simple and effective example of integrating an email server into a Node.js application. This app leverages **NodeMailer** to send emails via an SMTP server, providing a quick and easy demonstration of email integration in web services.

**GitHub Repository**: [NodeMailerBrk](https://github.com/Brrake/NodeMailerBrk)

## Requirements

To use this project, ensure that you have the following installed:

- **Node.js**: [v20.13.1](https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi)

## Installation

Clone the repository and install the required dependencies by running:

```bash
npm install
```

## Environment Variables

Before starting the server, you need to configure the environment variables for your email server. Below is a list of all the required environment variables and their respective descriptions.

| Property            | Type      | Default                         | Description                                                         | Required |
|---------------------|-----------|---------------------------------|---------------------------------------------------------------------|----------|
| `APP_NAME`          | `string`  | `NodeMailerBRK`                 | Application name (used in emails and logging)                       | true     |
| `PORT`              | `number`  | `8080`                          | Local server port where the app will be hosted                      | true     |
| `MAIL_HOST`         | `string`  | `mail.mailserver.com`           | SMTP server address or hostname                                     | true     |
| `MAIL_PORT`         | `number`  | `465`                           | SMTP server port                                                    | true     |
| `MAIL_SECURE`       | `boolean` | `true`                          | Whether to use secure SMTP (true for port 465, false for others)    | true     |
| `MAIL_USER`         | `string`  | `info@mailserver.com`           | SMTP username (usually an email address)                            | true     |
| `MAIL_PASS`         | `string`  | `123456789`                     | SMTP password                                                       | true     |
| `MAIL_DEFAULT`      | `string`  | `test.receiver@mailserver.com`  | Default recipient for test emails if not provided in the request    | true     |
| `ALLOW_DKIM`        | `boolean` | `false`                         | Enable DKIM Encryption                                              | false    |
| `DKIM_DOMAIN`       | `string`  | `mailserver.com`                | DKIM Domain                                                         | false    |
| `DKIM_SELECTOR`     | `string`  | `default`                       | DKIM Selector                                                       | false    |
| `DKIM_PATH_PRIVATE` | `string`  | `./dkim/dkim_private.key`       | DKIM Private Key Path                                               | false    |

### Example `.env` File:

```
# APP INFO 
APP_NAME='NodeMailerBRK'
PORT=8080
# SMTP INFO
MAIL_HOST=mail.mailserver.com
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USER=info@mailserver.com
MAIL_PASS=123456789
MAIL_DEFAULT=test.receiver@mailserver.com
# DKIM INFO
ALLOW_DKIM=false
DKIM_DOMAIN=mailserver.com
DKIM_SELECTOR=default
DKIM_PATH_PRIVATE='./dkim/dkim_private.key'
```
> Note : To make dotenv work properly you have to create a new file `.env` into the root folder of the project and fill it with your server informations. You can find an example of a .env file into the root folder of the project called `.env.example`


## Starting the Server

To start the application, use the following command:

```bash
npm start
```

Once the server is running, you can access it at [`http://localhost:8080`](http://localhost:8080). If the app is set up correctly, you should see the following response:

```json
{"message": "NodeMailer BRK application."}
```

## API Endpoints

The application provides the following API endpoints:

| Endpoint      | Method   | Description                        | Payload                           | Required |
|---------------|----------|------------------------------------|-----------------------------------|----------|
| `/`           | `GET`    | Returns a simple welcome message   |                                   | true     |
| `/email`      | `POST`   | Sends an email via the SMTP server | [`EmailPayload`](#emailpayload)   | true     |

### EmailPayload

The `POST /email` endpoint accepts the following JSON payload:

| Field     | Type      | Example                         | Description                       | Required |
|-----------|-----------|---------------------------------|-----------------------------------|----------|
| `subject` | `string`  | `Messaggio Ricevuto!`           | Subject line for the email        | true     |
| `to`      | `string`  | `test.receiver@mailserver.com`  | Recipient email address           | true     |

### Example EmailPayload

```json
{
  "subject": "Messaggio Ricevuto!",
  "to": "test.receiver@mailserver.com"
}
```

## Contribution

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest improvements to make this project better.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
