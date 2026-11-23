import {test, expect, TestInfo} from '@playwright/test';
import {LoginPage} from '../pages/login_page';
import {HomePage} from '../pages/home_page';
import {ADMIN, KathflixApi} from '../api_helper/kathflix_api'


const SENHA_USUARIO_TESTE = 'Senha123';

// ---- Apenas os cenários listados aqui (pelo nome do teste) precisam de um usuário criado pela API
const CENARIOS_COM_USUARIO = ['login com sucesso']

let loginPage: LoginPage
let homePage: HomePage
const api = new KathflixApi()
let prefixo: string;
let createUser: string