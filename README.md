# Cryptoverse
<p align="center">
  <img width="1440" alt="Screenshot 2024-08-26 at 9 13 58 AM" src="https://github.com/user-attachments/assets/8545bfe7-8550-4d84-be6c-4d8eea5a876d">
</p>

Welcome to the **Cryptoverse** GitHub repository! This project is a comprehensive and responsive cryptocurrency web application, leveraging various APIs and React.js tools to display the latest cryptocurrency prices, news, and other related data.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Installation](#installation)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
4. [Project Structure](#project-structure)
   - [Components](#components)
   - [Images](#images)
   - [Utils](#utils)
5. [API Integration](#api-integration)
6. [Usage](#usage)
7. [Images](#images)
8. [Visiting Link](#visiting-link)

## Overview

**Cryptoverse** is built with React.js and utilizes the Ant Design framework to create a responsive and user-friendly interface. The project integrates with external APIs, such as CoinRanking and Cryptocurrency News via RapidAPI, to fetch real-time data on cryptocurrencies.

## Features

- **Cryptocurrency Prices and Details**: Display real-time prices, historical data, and detailed information about various cryptocurrencies.
- **Crypto News**: Fetch and display the latest cryptocurrency news.
- **Responsive Design**: A fully responsive layout using Ant Design to ensure compatibility across different devices.
- **Interactive Charts**: Visualize price trends and historical data using Chart.js and React-Chartjs-2.

## Installation

To get started with the project, clone this repository and install the necessary dependencies.

### Clone the Repository

```bash
git clone https://github.com/your-username/cryptoverse.git
cd cryptoverse
```

### Install Dependencies

```bash
npm install antd @ant-design/icons
npm install axios
npm install chart.js
npm install html-react-parser
npm install millify
npm install moment
npm install react-chartjs-2
```

## Project Structure

The project follows a well-organized structure to maintain scalability and readability.

```bash
src/
|-- components/
|   |-- Cryptocurrencies.jsx
|   |-- CryptoDetails.jsx
|   |-- Exchanges.jsx
|   |-- Homepage.jsx
|   |-- Linechart.jsx
|   |-- Loading.jsx
|   |-- Navbar.jsx
|   |-- News.jsx
|   |-- index.js
|
|-- images/
|   |-- CoinDesk.png
|   |-- cryptocurrency.png
|   |-- loading.gif
|
|-- utils/
|   |-- fetchdata.js
```

### Components

- **Cryptocurrencies.jsx**: Displays a list of cryptocurrencies with their current prices and other data.
- **CryptoDetails.jsx**: Shows detailed information about a selected cryptocurrency.
- **Exchanges.jsx**: Lists various cryptocurrency exchanges.
- **Homepage.jsx**: The main landing page of the application.
- **Linechart.jsx**: A component that renders a chart based on the price and timestamp data from the CoinRanking API.
- **Loading.jsx**: A loading spinner component.
- **Navbar.jsx**: The navigation bar for the application.
- **News.jsx**: Displays the latest news related to cryptocurrencies.

### Images

This folder contains various images used throughout the application, including logos and loading indicators.

### Utils

- **fetchdata.js**: Contains functions for making API calls and fetching data from the CoinRanking and Cryptocurrency News APIs.

## API Integration

This project uses **RapidAPI** to make API calls to two services:

1. **CoinRanking**: For fetching cryptocurrency data such as prices, market caps, and historical data.
2. **Cryptocurrency News**: To get the latest news articles related to cryptocurrencies.

## Usage

After cloning the repository and installing the dependencies, you can start the development server by running:

```bash
npm start
```

This will start the application on `http://localhost:3000`.

## Images
<p align="center">
  <img width="1440" alt="Screenshot 2024-08-26 at 9 14 20 AM" src="https://github.com/user-attachments/assets/7eb778f6-9270-435e-90d3-01c43b7d2386">
</p>
<p align="center">
  **Cryptocurrencies**
</p>
<hr>

<p align="center">
  <img width="1398" alt="Screenshot 2024-08-26 at 9 15 19 AM" src="https://github.com/user-attachments/assets/3eba527d-aa6d-4f67-870e-e9976bad8480">
</p>
<p align="center">
  **Exchanges**
</p>
<hr>

<p align="center">
  <h2>News from CoinDesk</h2>
</p>
<p align="center">
  <img width="1397" alt="Screenshot 2024-08-26 at 9 15 30 AM" src="https://github.com/user-attachments/assets/c1d1df1b-5113-458d-bd44-9b550355e751">
</p>
<hr>


## Visiting Link

You can visit the live version of the **Cryptoverse** application at the following link:

[Cryptoverse Live](https://cryptoverse-for-cryptocurrencies.netlify.app/)

---

Feel free to contribute, raise issues, or suggest features to enhance **Cryptoverse**. Happy coding!
