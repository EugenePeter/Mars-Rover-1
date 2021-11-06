<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#testing">Testing</a></li>
      </ul>
    </li>
  </ol>
</details>

## MARS ROVER TEST

Here is my take on the Mars Rover test given to me as a coding test.
I haven't really expected to have this kind of challenge but anyways its is very nice project to test my problem solving skills in general without worrying much on the tech stack that I am using and the features that should be in the application.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en//)
- [Jest](https://jestjs.io//)

<!-- GETTING STARTED -->

## Getting Started

This app is build with nodejs and typescript and it needs those to run this project

### Installation

Install nodemon, typescript, ts-node and jest

1. Install npm packages
   ```sh
   npm install npm
   ```
   or
   Install via yarn
   ```sh
   yarn
   ```

## Usage

Assuming node and npm is installed, just run the command below to start the project.

1. ```sh
    npm start npm
   ```
   or
   ```sh
   yarn start
   ```

The initial landing position should be inputted in one line with each coordinates and cardinal point separated by spaces i.e. **1 2 N** or **3 3 E**.

With my implementation I was torn weather users need to input every rover directions i.e. pan left with **"L"**, pan right with **"R"** and move forward with **"M"**.
The given commands are **LMLMLMLMM** and **MMRMMRMRRM**. With this program, every command should be inputted one by one.

## Testing

Testing is conducted using jest

1. ```sh
    npm test
   ```
   or
   ```sh
   yarn test
   ```

<p align="right">(<a href="#top">back to top</a>)</p>
