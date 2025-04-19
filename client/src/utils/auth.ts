import { jwtDecode } from 'jwt-decode'; // Correct named import

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode(token) : null; // Decode the token
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    try {
      const decoded: { exp?: number } = jwtDecode(token); // Explicitly define the type
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now();
      }
      return false;
    } catch {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
