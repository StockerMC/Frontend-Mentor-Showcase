import App from "../challenges/rock-paper-scissors/App"
import { CookiesProvider } from "react-cookie";

export default function RPSApp() {
    return (
        <CookiesProvider>
            <App />
        </CookiesProvider>
    );
}
