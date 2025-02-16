import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent,
        children: [
            {
                path: "",
                component: ChatPageComponent
            },
            {
                path: "explore",
                component: ExplorePageComponent
            }, {
                path: "search",
                component: SearchPageComponent
            }
        ]
    },
    {
        path: "login",
        component: LoginPageComponent
    }
];
