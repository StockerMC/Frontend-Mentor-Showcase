import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
// import App from './App.tsx';
// import Root from "./routes/Root";
import ErrorPage from "./components/error-page";
import QRCodeApp from './routes/QRCodeApp'
import Home from './routes/Home';
import AgeCalculatorApp from './routes/AgeCalculatorApp';
import InteractiveRatingApp from './routes/InteractiveRatingApp';
import RPSApp from './routes/RPSApp';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
// ]);

// const a = lazy(() => import('./challenges/qr-code-component/App'));
// const a = lazy(() => new Promise( (resolve, reject) => <h1>TESTING</h1>))

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
//       <Route path="qr-code-component" element={<QRCodeApp />} errorElement={<ErrorPage />}/>
//       {/* {cards.map(card => <Route path={card.path} element={
//         // <Suspense fallback={<p>AAAAAAAAAAAAAAAAA</p>}>
//         //   <a />
//         // </Suspense>
//         <div><h1>TESTING</h1></div>
//       } errorElement={<ErrorPage />} key={card.path}/>)} */}
//     </Route>
//   ),
// );


function Root() {
  return (
    // <div className={styles.app}>
    //   <div className={styles.headerContainer}>
    //     <h1 className={styles.title}>Frontend Mentor Challenges</h1>
    //   </div>
    //   {/* <RouterProvider router={router} /> */}
    // </div>
    <Routes>
      {/* <Route index path="/" element={<Home />} /> */}
      {/* <Route path="/blog/*" element={<BlogApp />} />
      <Route path="/users/*" element={<UserApp />} /> */}
    </Routes>
  )
}

// figure out how to use `cards` - low priority
const router = createBrowserRouter([
  // { path: "*", Component: Root },
  { path: "/", Component: Home, errorElement: <ErrorPage />},
  { path: "/qr-code-component", Component: QRCodeApp, errorElement: <ErrorPage />},
  { path: "/age-calculator-app", Component: AgeCalculatorApp, errorElement: <ErrorPage />},
  { path: "/interactive-rating-component", Component: InteractiveRatingApp, errorElement: <ErrorPage />},
  { path: "/rock-paper-scissors", Component: RPSApp, errorElement: <ErrorPage />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
