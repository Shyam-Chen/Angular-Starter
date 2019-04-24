FROM node:8

ENV HOME /AngularNest-Fullstack-Starter

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

ENV NODE_ENV production

# envs --
ENV SITE_URL https://angularnest-by-example-prod.firebaseapp.com
ENV FUNC_URL https://us-central1-angularnest-by-example-prod.cloudfunctions.net

# ENV FIREBASE_API_KEY <FIREBASE_API_KEY>
# ENV FIREBASE_AUTH_DOMAIN <FIREBASE_AUTH_DOMAIN>
# ENV FIREBASE_DATABASE_URL <FIREBASE_DATABASE_URL>
# ENV FIREBASE_PROJECT_ID <FIREBASE_PROJECT_ID>
# ENV FIREBASE_STORAGE_BUCKET <FIREBASE_STORAGE_BUCKET>
# ENV FIREBASE_MESSAGING_SENDER_ID <FIREBASE_MESSAGING_SENDER_ID>

# ENV SENTRY_DSN <SENTRY_DSN>
# -- envs

RUN yarn build
RUN yarn build:api && cd functions && yarn install
