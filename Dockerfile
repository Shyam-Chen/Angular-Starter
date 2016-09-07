FROM buildpack-deps:jessie

ENV app /Angular2TS-Starter-Kit
ENV DEBIAN_FRONTEND noninteractive
ENV DISPLAY :99.0
ENV CHROME_BIN /usr/bin/chromium

WORKDIR ${app}
ADD . $app

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
    nodejs xvfb chromium libgconf-2-4 openjdk-7-jre-headless && \
    rm -rf /var/lib/apt/lists/*

RUN chmod a+x entrypoint.sh

ENTRYPOINT ["/Angular2TS-Starter-Kit/entrypoint.sh"]

RUN npm install --unsafe-perm

EXPOSE 3000 9876

CMD npm start
