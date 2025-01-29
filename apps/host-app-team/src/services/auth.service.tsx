class AuthService {
    private _isLogged: boolean = false;
    private _userName: string = '';

    get isLogged(): boolean {
        if (localStorage.getItem('isLogged')) {
            this._isLogged = localStorage.getItem('isLogged') === 'true';
        }
        return this._isLogged;
    }

    set isLogged(value: boolean) {
        this._isLogged = value;
        localStorage.setItem('isLogged', value.toString());
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    logout() {
        this.isLogged = false;
        this.userName = '';
        localStorage.removeItem('isLogged');
    }
}

export const authService = new AuthService();
