import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { EventsListingPage } from "./pages/EventsListingPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage, SignupPage, NotFoundPage } from "./pages/AuthPages";
import { SahyadriTreksPage } from "./pages/SahyadriTreksPage";
import { TrainingProgramsPage } from "./pages/TrainingProgramsPage";
import { BlogPage, BlogDetailPage } from "./pages/BlogPage";
import { GalleryPage } from "./pages/GalleryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "sahyadri-treks", Component: SahyadriTreksPage },
      { path: "events", Component: EventsListingPage },
      { path: "events/:eventId", Component: EventDetailPage },
      { path: "training", Component: TrainingProgramsPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:blogId", Component: BlogDetailPage },
      { path: "gallery", Component: GalleryPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);