# Use official Node.js LTS image as the base
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the app (production build)
RUN npm run build

# ---
# Production image, copy built assets from build stage
FROM node:20-alpine AS prod
WORKDIR /app

# Only copy package.json and lock file for production install
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built assets from previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

# Copy any other necessary files (static, etc.)
# COPY --from=build /app/other-static ./other-static

# Expose the port Vite preview server uses by default
EXPOSE 5173

# Start the app using Vite preview
CMD ["npm", "run", "preview"]
