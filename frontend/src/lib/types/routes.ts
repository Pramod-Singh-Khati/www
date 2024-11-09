import { route, string } from "react-router-typesafe-routes/dom";

const ROUTES = {
  HOME: route(""),
  PLAYGROUND: route("playground"),

  // General pages
  ABOUT: route("about"),
  DOWNLOADS: route("downloads"),
  RESEARCH: route("research"),
  TOS: route("tos"),
  PRIVACY: route("privacy"),

  // Account routes
  ACCOUNT: route("account"),
  LOGIN: route("login"),
  LOGOUT: route("logout"),
  SIGNUP: route(
    "signup",
    {},
    {
      EMAIL: route(":id", { params: { id: string().defined() } }),
    },
  ),
  KEYS: route("keys"),

  // Listings
  LISTINGS: route(
    "listings",
    {},
    {
      CREATE: route("create"),
      BROWSE: route("browse"),
    },
  ),
  LISTING: route("item/:username/:slug", {
    params: {
      username: string().defined(),
      slug: string().defined(),
    },
  }),
  PROFILE: route("profile/:id?", {
    params: { id: string() },
  }),
  FILE: route("file/:artifactId", {
    params: { artifactId: string().defined() },
  }),

  // Seller routes
  SELL: route(
    "sell",
    {},
    {
      ONBOARDING: route("onboarding"),
      DELETE: route("delete"),
    },
  ),

  // Orders
  ORDER: route(
    "order",
    {},
    {
      SUCCESS: route("success"),
    },
  ),
  ORDERS: route("orders"),

  // Terminal
  TERMINAL: route(
    "terminal",
    {},
    {
      WITH_ID: route(":id", {
        params: { id: string() },
      }),
    },
  ),

  // Not found
  NOT_FOUND: route("404"),
};

export default ROUTES;