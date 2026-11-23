import { Page, Locator } from '@playwright/test'

export class HomePage{
    readonly page: Page
    readonly userName: Locator
    readonly localButton: Locator

    constructor(page: Page){
        this.page = page
        this.userName = page.getByTestId('nav-username')
        this.localButton = page.getByTestId('nav-logout')
    }
}