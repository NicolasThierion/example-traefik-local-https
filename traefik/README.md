# M3 Traefik

The M3-traefik project is a common reverse-proxy & gateway for the M3 stack, that comes with forwarded oauth2.

## Getting started

### Run on your local machine

```bash
cd scripts/
./up-dev.sh
```

This script do the following:

- Generate a new self-signed certificate for `auth.master.takima.io.localhost`, and install it in the local CA.
- Run the `m3-traefik` to accept traffic on https ports
- Run `m3-traefik-forward-auth` to forward requests to auth provider ir required
- Run a local keycloak instance as the identity provider.
  > ![info] Keycloak comes with a dummy H2 database with _admin:admin_ as the only user.

You can now browse to the static site at [https://guide.master3.takima.io.localhost/](https://guide.master3.takima.io.localhost/)

> ![tip] This setup comes with a self signed HTTPS certificate suitable for develomment purpose. This certificate is located at `docker/certs`, and FQDN is `auth.master3.takima.io.localhost`.

#### Create a new user in local keycloak.

- [navigate to the local keycloak](https://auth.master3.takima.io.localhost/auth/admin) then log in with _admin:admin_
- navigate tu _Users_ then create a new user.

## Keycloak configurtion

This project comes with a pre-configured keycloak.

- At the moment, traefik-forward-auth only [supports forwaring the user's email trough header](https://github.com/thomseddon/traefik-forward-auth/pull/159). If you want to forward another claim, you have to [map to another client scope](https://github.com/thomseddon/traefik-forward-auth/issues/125#issuecomment-633083060)

[info]: ./.assets/blocks/info.png 'info'
[question]: ./.assets/blocks/question.png 'question'
[error]: ./.assets/blocks/error.png 'error'
[warning]: ./.assets/blocks/warning.png 'warning'
[danger]: ./.assets/blocks/danger.png 'danger'
[tip]: ./.assets/blocks/success.png 'tip'
