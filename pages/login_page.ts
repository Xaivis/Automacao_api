import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{
    readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly submit: Locator
    readonly error: Locator
    readonly forgotLink: Locator
    readonly info: Locator

    constructor(page: Page){
        this.page = page
        this.email = page.getByTestId('login-email')
        this.password = page.getByTestId('login-password')
        this.submit = page.getByTestId('login-submit')
        this.error = page.getByTestId('login-error')
        this.forgotLink = page.getByTestId('login-forgot')
        this.info = page.getByTestId("login-info");
    }

    async acessarSite(){
        await this.page.goto('/login.html?alerts=off')
        await expect(this.page).toHaveTitle('Kathflix - Entrar')
    
    
    }

    async login(email: string, password: string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.submit.click()
    }

    async esqueciASenha(){
        await this.forgotLink.click()
    }}