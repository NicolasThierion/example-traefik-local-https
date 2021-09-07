This project setup a very basic client-server app to show how to use HTTPS for local development with the help of traefik.

### How to use

- install docker
- run `up-dev.sh`
- navigate to [myapp.mycorp.fr.localhost](myapp.mycorp.fr.localhost)
  - the request is handled by traefik
  - traefik redirects http -> https
  - traefik forwards the request to the client (that is, the nginx server)
  - the client issues an API request to https://myapp.mycorp.fr.localhost:3000
  - traefik forwards the request to the server (the express api)
