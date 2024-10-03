import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Login from "./pages/login/Login";
import { Medications } from "./pages/medications/Medications.tsx";
import { Therapies } from "./pages/therapies/Therapies.tsx";
import {MedicationDetails} from "./pages/medicationDetails/MedicationDetails.tsx"
import { DoctorDetails } from "./pages/doctorDetails/DoctorDetails.tsx";
import { Profil } from "./pages/profil/Profil.tsx";
import { AddEditContact } from "./pages/addEditContact/AddEdithContact.tsx";
import { TherapieDetails } from "./pages/therapieDetails/TherapieDetails.tsx";
import { AddEditTherapie } from "./pages/addEditTherapie/AddEditTherapie.tsx";
import { AppNavigation } from "./components/appNavigation/AppNavigation.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/appNavigation",
    element: <AppNavigation />
  },

  {
    element: <Layout />,
    children: [
      {
        path: "/medications",
        children: [
          {
            path: "",
            element: <Medications/>
          },
          {
            path: "details",
            element: <MedicationDetails/>
          },
          {
            path: "profil",
            children: [
              {
                path: "",
                element: <Profil />,
              },
              {
                path: "login",
                element: <Login />,
              },
            ]
          }
        ]
      },
      {
        path: "/contacts",
        children: [
          {
            path: "",
            element: <Contacts />
          },
          {
            path: "doctorDetails",
            element: <DoctorDetails />
          },
          {
            path: "addEditContact",
            element: <AddEditContact />
          },
        ]
      },
      {
        path: "/therapies",
        children: [
          {
            path: "",
            element: <Therapies />
          },
          {
            path: "therapieDetails",
            children: [
              {
                path: "",
                element: <TherapieDetails />
              },
              {
                path: "doctorDetails",
                element: <DoctorDetails />
              },
              {
                path: "details",
                element: <MedicationDetails/>
              },
              {
                path: "addEditTherapie",
                element: <AddEditTherapie />,
              },
            ]
          },
          {
            path: "addEditTherapie",
            element: <AddEditTherapie />,
          },
        ]
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
