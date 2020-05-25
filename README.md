# country-data

This repo contains my solutions to the exercises in part 2c of [Deep Dive Into Modern Web Development](https://fullstackopen.com/en/part2/getting_data_from_server) course. The purpose of these exercises was to create a
React application that fetches country data from https://restcountries.eu/ and to display the weather of a certain country.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine 

### Prerequisites

- Create a [open weather](https://openweathermap.org/) acccount and retrieve an API key


### Installation
- Clone repo
```
git clone git@github.com:enrique-cardenas/country-data.git
```
- cd into the root directory
```
cd country-data
```
- Create a ".env" file in the root directory
- Add the following inside the file
```
REACT_APP_OPENWEATHERMAP_API_KEY=<YOUR OPEN WEATHER API KEY>
```
- Install all necessary node modules by running the following
```
npm install
```

### Usage

Run the following command in the root directory
```
npm start
```
