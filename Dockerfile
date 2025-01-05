# Use a Node.js image as the base
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]

# Install dependencies
RUN npm install 

# Copy the entire project to the container
COPY . .

# Build the frontend
RUN npm run build 

# Remove devDependencies after build
RUN npm prune --production

# Expose the port the app will listen on
EXPOSE 5000

# Command to run the app when the container starts
CMD ["node", "backend/server.js"]