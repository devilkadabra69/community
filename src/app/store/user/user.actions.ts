import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

// Fetch User Data
export const loadUser = createAction('[User] Load User');

export const loadUserSuccess = createAction(
    '[User] Load User Success',
    props<{ user: User }>()
);

export const loadUserFailure = createAction(
    '[User] Load User Failure',
    props<{ error: string }>()
);

// Update User Profile
export const updateUser = createAction(
    '[User] Update User',
    props<{ user: Partial<User> }>()
);

export const updateUserSuccess = createAction(
    '[User] Update User Success',
    props<{ user: User }>()
);
