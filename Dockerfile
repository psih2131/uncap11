# Используем минималистичный образ с Node.js 20
FROM node:20.19.0-alpine AS build

# Обновляем систему и устанавливаем необходимые зависимости
RUN apk update && apk upgrade && apk add --no-cache bash

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть) для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Собираем Nuxt.js приложение для продакшн-режима
RUN npm run build

# Используем второй этап, чтобы уменьшить размер контейнера
FROM node:20.19.0-alpine

# Обновляем систему и устанавливаем необходимые зависимости, добавляем dumb-init для корректной работы процессов
RUN apk update && apk upgrade && apk add --no-cache dumb-init && adduser -D nuxtuser

# Устанавливаем пользователя для безопасности
USER nuxtuser

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем результат сборки из первого этапа
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./

# Указываем порт, который будет использоваться для доступа к приложению
EXPOSE 8080

# Устанавливаем переменные окружения для работы Nuxt.js в продакшн-режиме
ENV HOST=0.0.0.0
ENV PORT=8080
ENV NODE_ENV=production

# Запускаем приложение с помощью dumb-init, чтобы корректно обрабатывать сигналы и завершение процессов
CMD ["dumb-init", "node", "/app/server/index.mjs"]
