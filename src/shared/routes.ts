import {getEnv} from "shared/utils";

const { ghPath, isDev} = getEnv();
const ROUTE_PATH = isDev ? '' : ghPath

const HOME_ROUTE = `/`;
const TODO_EDITOR_ROUTE = `/todoEditor`;
const TODO_VIEW_ROUTE = `/todoView`;
const GALLERY_ROUTE = `/gallery`;

const HEADER_NAVIGATE_ITEMS = [
    { title: 'Home', route: `${ROUTE_PATH}${HOME_ROUTE}` },
    { title: 'Todo Editor', route: `${ROUTE_PATH}${TODO_EDITOR_ROUTE}`},
    { title: 'Todo View', route: `${ROUTE_PATH}${TODO_VIEW_ROUTE}` },
    { title: 'Gallery', route: `${ROUTE_PATH}${GALLERY_ROUTE}`},
]

export const ROUTES = {
    HEADER_NAVIGATE_ITEMS,
    HOME_ROUTE,
    TODO_EDITOR_ROUTE,
    TODO_VIEW_ROUTE,
    GALLERY_ROUTE,
}