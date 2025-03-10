import { makeAutoObservable } from 'mobx';

class AuthStore {
    isLogged = false;

    constructor() {
        makeAutoObservable(this);
        this.isLogged = localStorage.getItem('isLogged') === 'true';
    }

    setLogged(value: boolean) {
        this.isLogged = value;
        localStorage.setItem('isLogged', value.toString());
    }

    logout() {
        this.isLogged = false;
        localStorage.removeItem('isLogged');
    }
}

export const authStore = new AuthStore();
