import { AppRoutesProps } from "@shared/types/router"


export enum AppRoutes {
    LOGIN = 'login'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: '/login'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: routePath.login,
        element: <div>sdfghjklkjhgfdsdfghj</div>
    }
}
