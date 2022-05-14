import { Navigate } from "react-router-dom";
import { useUserProvider } from "../providers/Auth.provider";

export enum ERouteGuards{
    Auth
}

export function GuardedRoute({ element, guard }: { element: JSX.Element, guard: ERouteGuards }) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    let { user } = useUserProvider();
    if(guard === ERouteGuards.Auth){
        if (!user) {
            return <Navigate to="/login" state={{ from: window.location.origin }} replace/>;
        }
    }
	return element;
}

