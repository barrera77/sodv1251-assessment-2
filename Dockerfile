# Use a Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies  

RUN npm install

# Copy the entire project to the container
COPY . .

# Build the frontend
RUN npm run build 

# Expose the port the app will listen on
EXPOSE 5000

# Command to run the app when the container starts
CMD ["npm", "run", "dev"]