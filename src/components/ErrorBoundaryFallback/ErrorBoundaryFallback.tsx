import { ReactElement } from "react";
import useErrorBoundary from "../../hooks/useErrorBoundary";
interface ErrorBoundaryFallbackProps {
    children: ReactElement;
}
/**
 * ErrorBoundaryComponent- wraps whole app (like context), uses useErrorBoundary hook
 * @param props children
 * @returns error || children
 */
export const ErrorBoundaryFallback = (props: ErrorBoundaryFallbackProps) => {
    const { children } = props;
    const error = useErrorBoundary();
    if (error) return <div>Opps! Something went wrong.</div>;
    return <>{children}</>;
};
