import { ApiBase, Json } from "./common_api";

export const BASEURL = process.env.KATHFLIX_URL ?? 'http://localhost:3000';
export const ADMIN = {email: 'admin@kathflix.com', password: 'admin123'} 