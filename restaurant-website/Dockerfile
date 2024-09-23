# # Specify the base image with the desired Node.js version
# FROM node:18-alpine


# # Set the working directory inside the container
# WORKDIR /restaurant-website

# # Copy the package.jsonn and package-lock.json files
# COPY package*.json ./
# RUN npm install --force --verbose

# # Install the dependencies with verbose output for debugging
# RUN npm install --verbose

# # Copy the rest of the application files
# COPY . .

# # Build the app (only necessary for production or if you have a build step)
# RUN npm run build

# # Expose the port the app runs on
# EXPOSE 3000

# # Set the environment to production (optional)
# ENV NODE_ENV=production

# # Run the app
# CMD ["npm", "start"]


# Step 1: Build the React app
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Change the Nginx port to 3000 (from 80)
RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf

# Expose port 3000 instead of the default port 80
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]