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
***
## Запуск

- ```npm run watch``` или ```npm run dev```
- ```php artisan serve```
***

## Backend
### Таблицы:
* scripts
* questions
* answers
* statuses
* variables
***

## Frontend
Нет модульности, но есть отображения views/example.vue (сейчас 4 компонента, они все используются в роутере) в папки находящихся в components/example  
Т.е., например, views/EditScript.vue использует компоненты из папки components/EditScript
