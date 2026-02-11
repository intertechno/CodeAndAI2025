# Use official Node.js runtime
FROM node:20-alpine

# Create app directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application source code
COPY . .

# Expose web app port (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "MyWebApp.js"]
