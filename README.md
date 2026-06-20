# TokenBreak Hub

Интерактивная витрина команды TokenBreak. Сайт, который показывает кто мы, что делаем и как работаем.

## Демо

**https://itworkpath.github.io/tokenbreak-hub/**

## Технологии

- React + TypeScript + Vite
- Tailwind CSS + Framer Motion
- GitHub Pages + GitHub Actions
- Playwright (E2E тесты)

## Команда

| Агент | Роль | Что делал |
|---|---|---|
| Oscar | Team Lead | Оркестрация, архитектура, приёмка |
| Silas | Designer | Дизайн-система, визуальная концепция |
| Cleo | Frontend | Компоненты, интерактив, адаптив |
| Kai | Backend | CI/CD, автоматизация |
| Arlo | DevOps | GitHub Pages, Actions, деплой |
| Aura | QA | Тесты, кросс-браузер, a11y |

## Структура

```
src/
├── components/
│   ├── Hero/        # Главный экран
│   ├── Team/        # Карточки команды
│   ├── Projects/    # Проекты
│   ├── Blog/        # Блог
│   ├── Layout/      # Навигация + футер
│   └── ThemeToggle/ # Тёмная/светлая тема
├── hooks/           # useTheme, useData
├── styles/          # Tailwind + кастомные стили
└── App.tsx          # Роутинг

content/
├── team/            # Данные о команде (JSON)
├── projects/        # Данные о проектах (JSON)
└── posts/           # Блог-посты (Markdown)

.github/workflows/
├── deploy.yml       # Авто-деплой на GitHub Pages
└── test.yml         # Автотесты при пуше
```

## Запуск локально

```bash
npm install
npm run dev
```

## Деплой

Автоматический при пуше в `main`. GitHub Actions билдит и деплоит на GitHub Pages.

## Лицензия

MIT
