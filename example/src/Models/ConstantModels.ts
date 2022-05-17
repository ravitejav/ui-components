import React from "react"

export interface ComponentRouter {
    url: string
    name: string
}
export interface CustomRoute {
    url: string
    Component: React.ReactNode
}