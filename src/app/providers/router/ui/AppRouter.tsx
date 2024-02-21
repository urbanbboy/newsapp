import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { routeConfig } from "@shared/config"
import { PageLoader } from "@shared/ui/PageLoader"

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}