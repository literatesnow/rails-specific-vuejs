# Specific

Simple Todo single page application using Ruby on Rails, Bootstrap and Vue.Js.

## Features

* Created, edit and delete.
* Mark as completed.
* Due Date.

## Browser Support

Tested with ``Chrome x86_64 Version 65.0.3325.181``.

* [Template literals](https://caniuse.com/#search=Template%20literals)
* [Vue.js Compatibility](https://vuejs.org/v2/guide/installation.html#Compatibility-Note)

## Requirements

* [Docker](https://www.docker.com/) installed and running.

## Production

1. Building.

      ```bash
        $ docker build -t rails-specific-vuejs .
      ```

1. Running.

      * Starts the service on [http://locahost:8080](http://locahost:8080).

      ```bash
        $ docker run -d -p 8080:3000 \
                     -e RAILS_ENV=production \
                     rails-specific-vuejs
      ```

## Development

1. To use the docker container in development, the container needs to have the same user id and group id as the current user. The ``build_dev`` script sets this up automatically.

      ```bash
        $ ./build_dev
      ```

1. Runs the container and starts a shell (instead of the default entry point which is production mode). The application directory is shared into the container with a volume which means all changes to this directory will be reflected inside the container to ``/opt/service``.

      ```bash
        $ ./run_dev
      ```

1. Starting the service which runs on [http://localhost:3000](http://localhost:3000).

      ```bash
        service:/opt/service$ rails server
      ```
