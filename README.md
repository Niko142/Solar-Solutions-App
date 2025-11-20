# :sunny: Solar-Solutions - лендинг для компании по продаже солнечных батарей

![Скриншот лендинга](./public/screenshot.png)

## :book: Описание

Проект представляет собой лендинг для компании, занимающейся продажей и установкой солнечных батарей и сопутствующего оборудования.

## :hammer_and_wrench: Стек технологий

- Next.js
- React
- TypeScript
- Tailwind
- Bun - основной пакетный менеджер

## :rocket: Установка и запуск

1. Клонировать репозиторий:

   ```bash
   git clone https://github.com/Niko142/Solar-Solutions-App.git
   ```

   Переходим в нужную папку:

   ```bash
   cd Solar-Solutions-App
   ```

2. Установить зависимости:

   ```bash
   bun install
   ```

3. Запустить dev-сборку (опционально):

   ```bash
   bun run dev
   ```

4. Сборка для production:

   ```bash
   # Сборка production-версии проекта
   bun run build
   # Запуск production-сборки
   bun run start
   ```

## :white_check_mark: Особенности проекта

- **Компонентный подход:** Разбиение интерфейса на модульные компоненты;
- **Анимации:** Плавные интерактивные анимации, реализованные с помощью библиотеки `framer-motion`, обеспечивающие необходимый UI/UX эффект;
- **Адаптивный дизайн:** Корректное отображение на всех типах устройств;
- **Статическая генерация:** Использование возможностей Next.js для оптимизированной сборки и более комфортной маршрутизации.

## :file_folder: Структура

```text
Solar-Solutions-App
├── README.md
├── src
│   ├── app
│   │   ├── (main)
│   │   ├── (route)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── about-us
│   │   ├── advantages
│   │   ├── footer
│   │   ├── header
│   │   ├── intro
│   │   └── offerings
│   ├── hooks
│   │   └── useClickOutside.ts
│   └── shared
│       ├── animations
│       ├── button
│       ├── components
│       ├── data
│       └── types
```

## :link: Ссылки

[Демо-версия](https://niko142.github.io/Solar-Solutions-App/)

[Макет в Figma](<https://www.figma.com/design/IM6Mm8u7VNCWlduJIjiWtY/website-design---solar-solution---corporate-(Community)?node-id=0-1&t=0s9AeR5hC2aiXlPh-1>)
