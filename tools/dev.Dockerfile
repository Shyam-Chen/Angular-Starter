FROM node:12

ENV HOME /AngularNest-Fullstack-Starter

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

ENV NODE_ENV production

# envs --
ENV SITE_URL https://angularnest-by-example-dev.firebaseapp.com
ENV FUNC_URL https://us-central1-angularnest-by-example-dev.cloudfunctions.net

# ENV SENTRY_DSN <SENTRY_DSN>
# -- envs

RUN yarn build
