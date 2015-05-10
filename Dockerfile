FROM node:0.10-onbuild

#copy your source folder into the Docker container
COPY . /src

#build the app
RUN cd /src; npm install

# replace this with your application's default port
EXPOSE 3000

#run the app
CMD ["npm", "start", "some argument"]