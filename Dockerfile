# Comment line
FROM node

#This tells the container to start in that directory
WORKDIR /app

# We are copying the package .json file do the isn't a conflict with the node_modules directoriy
COPY package.json ./

RUN npm install

COPY . ./

# The last command we need to start the container
CMD  npm start





