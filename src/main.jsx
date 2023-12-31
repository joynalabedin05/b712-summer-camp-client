import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home';
import ErrorPage from './pages/errorPage/ErrorPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AuthProvider from './provider/AuthProvider';
import AllClass from './pages/AllClass/AllClass';
import InstructorPage from './pages/Instructor/InstructorPage';
import DashBoard from './layouts/DashBoard';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/class",
        element: <AllClass></AllClass>,
      },
      {
        path: "/instructor",
        element: <InstructorPage></InstructorPage>,
      },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path: "allusers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "manageclass",
        element: <AdminRoute><ManageClass></ManageClass></AdminRoute>,
      },
      {
        path: "mycart",
        element: <MyClass></MyClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element: <AllPayments></AllPayments>,
      },
      {
        path: "addclass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "instructorclass",
        element: <InstructorClass></InstructorClass>,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AllUsers from './pages/Dashboard/AllUsers';
import AdminRoute from './routes/AdminRoute';
import ManageClass from './pages/Dashboard/ManageClass';
import MyClass from './pages/Dashboard/MyClass';
import AddAClass from './pages/Dashboard/AddAClass';
import Payment from './pages/Dashboard/Payment';
import AllPayments from './pages/Dashboard/AllPayments';
import InstructorClass from './pages/Dashboard/InstructorClass';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
