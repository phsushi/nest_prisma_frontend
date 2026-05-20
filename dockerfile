# Estágio 1: Build
FROM node:20-alpine AS build

WORKDIR /app

# Instala as dependências
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos e faz o build
COPY . .
# A variável de ambiente do Vite precisa estar presente no momento do build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# Estágio 2: Serve (Nginx)
FROM nginx:stable-alpine

# Copia o build do estágio anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Copia uma config de Nginx para suportar o React Router (essencial!)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]