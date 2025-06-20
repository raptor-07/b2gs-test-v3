FROM node:18

# Create app directory
WORKDIR /app

# Copy source code
COPY . .

# Use safe npm version
RUN npm install -g npm@10

# Install dependencies
RUN npm install --legacy-peer-deps

# Build the app
RUN npm run build

CMD ["npm", "start"]
