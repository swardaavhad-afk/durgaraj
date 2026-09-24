import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/layouts/RootLayout";
import { ContentHomePage } from "./pages/ContentHomePage";
import { EventsListingPage } from "./pages/EventsListingPage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { ContentAboutPage } from "./pages/ContentAboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage, SignupPage, NotFoundPage } from "./pages/AuthPages";
import { TrainingCatalogPage } from "./pages/TrainingCatalogPage";
import { HimalayaTreksPage } from "./pages/HimalayaTreksPage";
import { ContentBlogPage, ContentBlogDetailPage } from "./pages/ContentBlogPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AdminPage } from "./pages/AdminPage";

export const router = createBrowserRouter([
  { path: "/control-room", Component: AdminPage },
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: ContentHomePage },
      { path: "himalaya-treks", Component: HimalayaTreksPage },
      { path: "events", Component: EventsListingPage },
      { path: "events/:eventId", Component: EventDetailPage },
      { path: "training", Component: TrainingCatalogPage },
      { path: "blog", Component: ContentBlogPage },
      { path: "blog/:blogId", Component: ContentBlogDetailPage },
      { path: "gallery", Component: GalleryPage },
      { path: "about", Component: ContentAboutPage },
      { path: "contact", Component: ContactPage },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);