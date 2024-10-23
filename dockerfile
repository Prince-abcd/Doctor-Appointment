# Stage 1: Build
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite app for production
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
