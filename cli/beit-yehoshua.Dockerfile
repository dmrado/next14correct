FROM node:20.15-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV DB_HOST=beit-yehoshua-db-container
ENV DB_PORT=3306
ENV DB_NAME=nextjs
ENV DB_LOGIN=root
ENV DB_PASSWORD=qwerty123
ENV NEXTAUTH_SECRET=1234567890
ENV USER_EMAIL=xxx
ENV RECAPTCHA_SERVER_SECRET=yyy

EXPOSE 3000

CMD ["npm", "run", "start"]
