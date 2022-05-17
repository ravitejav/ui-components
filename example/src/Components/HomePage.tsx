import React from "react";

export const HomePage = () => {
    return (
        <section className="w-full h-full flex items-center justify-center bg-slate-400">
            <div className="text-white">
                <h1 className="text-5xl text-ellipsis">Welcome to <span className="text-yellow-500">Ui-Components</span></h1>
                <p className="mx-3 mt-2">explore the components!!!</p>
            </div>
        </section>
    );
}