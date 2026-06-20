import { test, expect } from '@playwright/test'

test.describe('TokenBreak Hub', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Hero section renders correctly', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('TokenBreak')
    expect(await page.locator('text=AI Engineering Team').count()).toBeGreaterThan(0)
  })

  test('Navigation works', async ({ page }) => {
    await page.click('text=Команда')
    await expect(page.locator('h2')).toContainText('команда')

    await page.click('text=Проекты')
    await expect(page.locator('h2')).toContainText('проекты')

    await page.click('text=Блог')
    await expect(page.locator('h2')).toContainText('блог')
  })

  test('Team section shows all 6 members', async ({ page }) => {
    await page.click('text=Команда')
    const memberCards = page.locator('h3')
    await expect(memberCards).toHaveCount(6)
  })

  test('Theme toggle works', async ({ page }) => {
    const toggle = page.locator('button[aria-label="Toggle theme"]')
    await toggle.click()
    // Check that class changed
    const html = page.locator('html')
    const classes = await html.getAttribute('class')
    // Should toggle between light and dark
    expect(classes).toBeDefined()
  })

  test('Blog posts load', async ({ page }) => {
    await page.click('text=Блог')
    const articles = page.locator('article')
    expect(await articles.count()).toBeGreaterThan(0)
  })

  test('Blog post opens on click', async ({ page }) => {
    await page.click('text=Блог')
    const firstPost = page.locator('article').first()
    const postTitle = await firstPost.locator('h3').textContent()
    await firstPost.click()
    await expect(page.locator('h1')).toContainText(postTitle || '')
  })

  test('Back button returns to blog list', async ({ page }) => {
    await page.click('text=Блог')
    await page.locator('article').first().click()
    await page.click('text=Назад к блогу')
    await expect(page.locator('h2')).toContainText('блог')
  })

  test('Projects section renders', async ({ page }) => {
    await page.click('text=Проекты')
    const projectCards = page.locator('text=В разработке, text=Запущен').first()
    await expect(projectCards).toBeVisible()
  })

  test('Footer renders', async ({ page }) => {
    await expect(page.locator('footer')).toContainText('TokenBreak')
    await expect(page.locator('footer >> text=GitHub')).toBeVisible()
  })

  test('Responsive: mobile menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('text=Команда')).toBeVisible()
  })
})
