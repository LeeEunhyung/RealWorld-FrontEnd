import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

export const PrivateRoute = ({ component, ...rest }: RouteProps) => {
    if (!component) {
        throw Error('component is undefined')
    }

    const Component = component

    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    )
}
