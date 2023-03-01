<h3 align="center">Neoway Project</h3>
  <p>
    Back end Development Project</p>

<div align="center">
  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  
</div>

<!-- Getting Started -->

# About

The objective of this app is to bulk insert data into a PostgreSQL database via a .txt file containing the needed information.

<!-- Getting Started -->

# Installation

To clone the project, run the following command:

```git
git clone https://github.com/Jackie-Moraes/Neoway-Project.git
```

Then, navigate to the project folder and run the following command:

```git
npm install
```

Finally, start the server (in development):

```git
npm run dev
```

You can now access the API's endpoints on `http://localhost:5000/` (by default).

<!-- Usage -->

# Usage

The first step is to provide a "dados.txt" inside the scan folder. The project comes with an example file for testing.

The file should be formated as follows, otherwise the application will not work:

```txt
CPF                PRIVATE     INCOMPLETO  DATA DA ÚLTIMA COMPRA TICKET MÉDIO          TICKET DA ÚLTIMA COMPRA LOJA MAIS FREQUÊNTE LOJA DA ÚLTIMA COMPRA
008.199.750-79     0           0           2012-05-15            101,28                101,28                  79.379.491/0008-50  79.379.491/0008-50
070.318.636-19     0           0           2012-05-15            53,89                 53,89                   79.379.491/0008-50  79.379.491/0008-50
```

After the file is set-up, make a POST requisition to your `http://localhost:5000/file` URL.

If all steps have been done correctly, a "Status Code: **201** - Created" should be sent after all information is properly sanitized and inserted into the Database.

<!-- Docker -->

# Running Docker

###### Pre-requisites: Docker, Docker Compose

Run the following command to start the containers:

Build the image:

```bash
docker-compose build
```

Start the container:

```bash
docker-compose up
```

<!-- Models -->

# Database

## Table _`users`_

![Banner](https://cdn.discordapp.com/attachments/493890933377597472/1080541155600642218/image.png)

-   `id`: A unique identifier for each user. `int`
-   `cpf`: The user's cpf. Must be formatted correctly as shown on "Usage" step and must not repeat. `char(14)`
-   `private`: User's privacy. `int`
-   `incompleto`: Determines if user's info is complete. `int`
-   `dataUltimaCompra`: Date of the last purchase done by the user. Can be null if no purchases were made. `date`
-   `ticketMedio`: Average price of user's purchases. Can be null if no purchases were made. `float`
-   `ticketUltimaCompra`: Price of user's last purchase. Can be null if no purchases were made. `float`
-   `lojaFrequente`: CNPJ of user's frequent store of choice. Can be null if no purchases were made. Must be formatted correctly as shown on "Usage" step. `char(18)`
-   `lojaUltimaCompra`: CNPJ of user's last store of choice. Can be null if no purchases were made. Must be formatted correctly as shown on "Usage" step. `char(18)`
