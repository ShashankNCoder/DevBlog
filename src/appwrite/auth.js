import config from '../config/config';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    static instance = null;
    client = new Client();
    account;

    constructor() {
        if (AuthService.instance) return AuthService.instance;
        
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
        
        // Initialize the account instance
        this.account = new Account(this.client);
        
        AuthService.instance = this;
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            }
            return userAccount;
        } catch (error) {
            throw new Error(`Account creation failed: ${error.message}`);
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            // Cache the session
            localStorage.setItem('appwrite_session', JSON.stringify(session));
            return session;
        } catch (error) {
            throw new Error(`Login failed: ${error.message}`);
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            if (user) {
                localStorage.setItem('appwrite_user', JSON.stringify(user));
                return user;
            }
            return null;
        } catch (error) {
            if (error.code === 401) {
                console.warn("Session expired, attempting to refresh...");
                try {
                    // Try to refresh the session
                    await this.account.createAnonymousSession();
                    const user = await this.account.get();
                    if (user) {
                        localStorage.setItem('appwrite_user', JSON.stringify(user));
                        return user;
                    }
                } catch (refreshError) {
                    console.warn("Session refresh failed");
                }
            }
            this.clearCache();
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSession('current');
            this.clearCache();
        } catch (error) {
            throw new Error(`Logout failed: ${error.message}`);
        }
    }

    clearCache() {
        localStorage.removeItem('appwrite_session');
        localStorage.removeItem('appwrite_user');
    }
}

const authService = new AuthService();

export default authService