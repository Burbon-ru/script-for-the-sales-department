# Скрипт для отдела продаж

## Установка

1. git clone репозиторий

2. Установить зависимости
````
composer install
````

3. Переименовать .env.example в .env и в файле окружения (.env) указать название базы данных, user_name и пароль

4. Сгенерировать ключ приложения
````
php artisan key:generate
````

5. Migrate
````
php artisan migrate --seed
````

6. Install Node modules
````
npm install
````

## Как использовать

- ```npm run watch``` или ```npm run dev```
- ```php artisan serve```
