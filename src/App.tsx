import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/error-page";
import QRCodeApp from './routes/QRCodeApp'
import Home from './routes/Home';
import AgeCalculatorApp from './routes/AgeCalculatorApp';
import InteractiveRatingApp from './routes/InteractiveRatingApp';
import RPSApp from './routes/RPSApp';
import CalculatorApp from './routes/CalculatorApp';

// figure out how to use `cards` - low priority
const router = createBrowserRouter([
  // { path: "*", Component: Root },
  { path: "/", Component: Home, errorElement: <ErrorPage />},
  { path: "/qr-code-component", Component: QRCodeApp, errorElement: <ErrorPage />},
  { path: "/age-calculator-app", Component: AgeCalculatorApp, errorElement: <ErrorPage />},
  { path: "/interactive-rating-component", Component: InteractiveRatingApp, errorElement: <ErrorPage />},
  { path: "/rock-paper-scissors", Component: RPSApp, errorElement: <ErrorPage />},
  { path: "/calculator-app", Component: CalculatorApp, errorElement: <ErrorPage />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
