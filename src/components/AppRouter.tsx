import React from 'react'
import {privateRoutes, publicRoutes} from "../routes"
import {Navigate, Route, Routes} from "react-router-dom"
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants"
import {useSelector} from "react-redux"
import {selectAuth} from "../redux/selectors/authSelector"
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {
    const auth = useSelector(selectAuth)
    const [user] = useAuthState(auth)

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} Component={Component}/>
                )}
                <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} Component={Component}/>
                )}
                <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />}/>
            </Routes>
        )
}

export default AppRouter