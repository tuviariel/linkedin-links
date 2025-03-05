import { useEffect, useState } from "react";
/**
 * Error Boundary Hook- A hook designed to through and catch all app errors that were not caught locally
 * @param props none. checks for error events through the global window
 * @returns error to the ErrorBoundaryFallback component
 */
export const useErrorBoundary = () => {
    const [error, setError] = useState(null);
    useEffect(() => {
        const errorHandler = (err: any) => {
            setError(err);
        };
        window.addEventListener("error", errorHandler);
        return () => {
            window.removeEventListener("error", errorHandler);
        };
    }, []);
    return error;
};
