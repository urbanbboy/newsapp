import { Route, Routes } from "react-router-dom"
import { AppRoute, routeConfig } from "../config/routeConfig"
import { Suspense } from "react"
import { PageLoader } from "@shared/ui/PageLoader"
import { RequireAuth } from "./RequireAuth"

export const AppRouter = () => {
    const withWrapper = (route: AppRoute) => {
        const routeElement = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(
                    route.authOnly ? (
                        <RequireAuth>{routeElement}</RequireAuth>
                    ) : (
                        routeElement
                    )
                )}
            />
        )
    }

    return <Routes>{routeConfig.map(withWrapper)}</Routes>
}