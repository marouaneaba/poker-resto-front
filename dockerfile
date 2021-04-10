FROM nginx:1.17.1-alpine
# Remove all old nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy build folder dist
COPY dist/poker-bar-front /usr/share/nginx/html
