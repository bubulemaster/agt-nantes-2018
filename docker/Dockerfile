FROM node:9

ARG USERNAME
ARG USERUID
ARG USERGID

#RUN groupadd -g $USERGID $USERNAME || true
#RUN useradd -u $USERUID -g $USERUID $USERNAME
RUN npm install -g yarn
RUN yarn global add preact-cli
RUN mkdir /src
