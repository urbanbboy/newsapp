import { LoginPage } from "@pages/LoginPage"
import { NotFoundPage } from "@pages/NotFoundPage"
import { ReactNode } from "react"

export enum RoutePath {
    MAIN_PAGE = '/',
    LOGIN_PAGE = '/login',
    NOT_FOUND_PAGE = '*',
}

export interface AppRoute {
    path: string;
    element: ReactNode;
    authOnly?: boolean;
}

export const routeConfig: AppRoute[] = [
    {
        path: RoutePath.LOGIN_PAGE,
        element: <LoginPage />,
        authOnly: false
    },
    {
        path: RoutePath.NOT_FOUND_PAGE,
        element: <NotFoundPage />,
        authOnly: false
    },
    {
        path: RoutePath.MAIN_PAGE,
        element: <NotFoundPage />,
        authOnly: false
    },
]