import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto sm:px-10 lg:px-14">
                    {props.auth.user ? (
                        <>
                            <h3 className="py-6">Logged in</h3>
                            <Link
                                href={route("dashboard")}
                                className="bg-red-500 text-white text-center px-8 py-2 mt-4 rounded"
                            >
                                Redirect to dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="py-6">
                                <h1>Register to start tracking your trips</h1>
                            </div>
                            <Link
                                href={route("register")}
                                className="bg-red-500 text-white text-center px-8 py-2 mt-4 rounded"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
