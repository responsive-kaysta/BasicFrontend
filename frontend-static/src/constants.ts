import { eArticlesOrder } from "./page-types";

export const PAGE_NAME = "MasterArchive PWA (beta)";
export const PAGE_AUTHOR = "responsive IT";
export const PAGE_DESCRIPTION = "mobile first!";
export const PAGE_TOPIC = "News | Information | Archiv | Suche";
export const PAGE_KEYWORDS = "reactjs, css3, html5, responsive";
// Custom stuff
export const PAGE_MAIN_TOPIC = "Das umfassende(nste) News-Archiv";

//
export const PUBLIC_SELECT_LIMIT = 50;
export const PUBLIC_SKIP_LIMIT = 50;
export const PUBLIC_SCROLL_LIMIT = 2;
//
export const PRIVATE_SELECT_LIMIT = 100;
export const PRIVATE_SKIP_LIMIT = 100;
export const PRIVATE_SCROLL_LIMIT = 20;
//
export const DEFAULT_LIST_ORDER = eArticlesOrder.desc;

// API Endpoint
// export const API_URL = "https://masterarchive-api.responsive-kaysta.ch/";
export const API_URL = "http://127.0.0.1:8080/";
