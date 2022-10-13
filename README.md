# NodeJS-Practice-Test-Task-2

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-test">About The Test</a>
      <ul>
        <li><a href="#workflow">Workflow</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Test

This is the second test I received during my intership at MeU Solutions. Continue the task 1, this time I need to use Sequelize for working with database. 

<p align="right">(<a href="#top">back to top</a>)</p>

### Workflow

This section should list the workflow of the project.

* Setup Sequelize and adjust APIs to use ORM instead of raw query.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

This section should list any major frameworks/tools in the project.

* Sequelize

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.

### Prerequisites

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Set up like the first project
Please refer to this link for more details on setting up postgreSQL using docker.

2.Clone the project
  ```sh
   git clone https://github.com/Weslife2002/NodeJS-Practice-Test-Task-2
   ```
3. Install all the dependency.
   ```sh
   npm install
   ```

4. Open new terminal and run the following code to migrate the model to the database.
   ```sh
   npx sequelize-cli db:migrate
   ```
   
5. Push some data to it: 
  ```sh
   npx sequelize-cli db:seed:all
   ```
6. Run the project
   ```sh
    npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
