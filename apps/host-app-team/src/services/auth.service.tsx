import { authStore } from '../stores/authStore';

class AuthService {
    private _userName: string = '';

    get isLogged(): boolean {
        return authStore.isLogged;
    }

    set isLogged(value: boolean) {
        authStore.setLogged(value);
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    logout() {
        authStore.logout();
    }
}

export const authService = new AuthService();
