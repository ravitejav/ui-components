import React from "react"

export interface ComponentRouter {
    url: string
    name: string
    title: string
}
export interface CustomRoute {
    url: string
    Component: React.ReactNode
}

export interface ComponentPropsItem {
    name: string
    explanation: string
    syntax: string
    example?: string
    optional: boolean
}