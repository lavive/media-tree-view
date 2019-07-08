/* manage authentification */
export class AuthService {
    private auth = false;

    signIn() {
      this.auth = true;
    }

    signOut() {
      this.auth = false;
    }

    isAuth(): boolean {
      return this.auth;
    }
}