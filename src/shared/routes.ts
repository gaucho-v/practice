import {getEnv} from "shared/utils";

const { ghPath, isDev} = getEnv();
const ROUTE_PATH = isDev ? '' : ghPath

const HOME_ROUTE = `${ROUTE_PATH}/`;
const TODO_EDITOR_ROUTE = `${ROUTE_PATH}/todoEditor`;
const TODO_VIEW_ROUTE = `${ROUTE_PATH}/todoView`;
const GALLERY_ROUTE = `${ROUTE_PATH}/gallery`;

const HEADER_NAVIGATE_ITEMS = [
    { title: 'Home', route: HOME_ROUTE },
    { title: 'Todo Editor', route: TODO_EDITOR_ROUTE},
    { title: 'Todo View', route: TODO_VIEW_ROUTE },
    { title: 'Gallery', route: GALLERY_ROUTE},
]

export const ROUTES = {
    HEADER_NAVIGATE_ITEMS,
    HOME_ROUTE,
    TODO_EDITOR_ROUTE,
    TODO_VIEW_ROUTE,
    GALLERY_ROUTE,
}