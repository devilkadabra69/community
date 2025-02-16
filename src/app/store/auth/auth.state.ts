export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    error: string | null;
}

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    token: null,
    error: null
};
