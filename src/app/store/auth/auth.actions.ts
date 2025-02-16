import { createAction, props } from "@ngrx/store";

//login actions
export const login = createAction('[Auth] Login', props<{ username: string, password: string }>);
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>);
export const loginFailed = createAction('[Auth] Login Failure', props<{ error: string }>);
//logout actions
export const logout = createAction('[Auth] Logout');