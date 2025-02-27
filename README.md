# PokerBarFront  <br/>
[![CI Poker-restaurant-front](https://github.com/marouaneaba/poker-resto-front/actions/workflows/ci-cd.yml/badge.svg?branch=master)](https://github.com/marouaneaba/poker-resto-front/actions/workflows/ci-cd.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

# Dependencies projet

* [Angular-11] - ...
* [Json-Server] - Mock API Rest and use db.json for data api
* [Font-Awesome] - icon html projet
* [Boostrap] - ...
* [Atom] - ...
* [WebStorm] - IDE JetBrains
* [Saas/Css3] - ...
* [Git] - TrunkBase, Livraison continue, pas du proessus bloque la livraison, aucun besoin de créer plusieurs branche
* [Sonar] - https://sonarcloud.io/dashboard?id=marouaneaba_poker-resto-front
* [node.js] - evented I/O for the backend

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker:

### Build  image:
`docker build -t angular-nginx-server . `  

### Run container:
`docker run --rm -it -p 8080:80 angular-nginx-server ` <br/>
`-p : Map 80 port to 8080` <br/>
Navigate to `localhost:8080` for website.

## Sonar:

// TODO

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
