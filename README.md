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
I haven't really expected to have this kind of challenge but anyways its is very nice project to test my problem solving skills in general without worrying much on the tech stack that I am going to be using and the features that should be in the application.

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en//)
- [Jest](https://jestjs.io//)

<!-- GETTING STARTED -->

## Getting Started

This app is build with nodejs and typescript and it needs those to run this project.

### Installation

Install nodejs, nodemon, typescript, ts-node and jest

1. - Download node js from - [Node.js](https://nodejs.org/en//)
   - Run the installer
2. Test nodejs by running the command below.
   ```sh
   node -v
   ```
   ```sh
   npm -v
   ```
3. Install npm packages
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
   npm start
   ```
   or
   ```sh
   yarn start
   ```
   Running npm start or yarn start removes the dist folder, runs tsc which rebuilds and compiles the typescript file to common js inside dist/directory then finally executes the built app.js file.

## Implementation

**LANDING POSITION**

The first input that the program accepts is the initial landing position of the rover.
For [**x**] and [**y**], only input [**0-5**] is accepted as a **valid coordinate** for the **plateau** that is **5** by **5** in size. For [**z**] variable only valid compass points are accepted ie. [**N,S,E,W**].

The initial landing position should be inputted in one line with each coordinates and cardinal/compass point separated by spaces i.e. **1 2 N** or **3 3 E**.
I designed the program to accept possible input without spaces i.e. **12n**, the program then separates the characters and transforms to uppercase and turns it into an **array** of **strings**.

The program will guard against invalid data. The guard will return boolean values, if the program returns true which means invalid data is given, it will reset and take the user back to input valid characters. if it returns false then users can proceed to input navigation commands.

**NAVIGATION COMMANDS**

With my implementation I was torn weather users need to input every rover directions i.e. pan left with **"L"**, pan right with **"R"** and move forward with **"M"**.
The given commands are **LMLMLMLMM** and **MMRMMRMRRM**. With this program I decided that every command should be inputted one by one to add meaningful interactions.

Like setting the landing position, for the navigation commands guards are also in place to ensure correct data is given. Only characters [**L,R,M,S**] are accepted.

I also added a [**S**] stop command. Running this will show the user the directions and position that the rover is currently on then take the user back to set initial landing position.

## Testing

Testing is conducted using jest

1. ```sh
    npm test
   ```
   or
   ```sh
   yarn test
   ```

Running npm test or yarn test will programatically run a pre setted input [**12N**] or [**33E**] for landing position and test whether the navigation command **LMLMLMLMM** or **MMRMMRMRRM** will enable the rover to stop at the correct position.
It will also test individual functions and check if it returns correct values.

<p align="right">(<a href="#top">back to top</a>)</p>
