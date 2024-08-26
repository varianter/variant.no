import * as queryStore from "@sanity/react-loader";

import { sharedClient } from "./client";
import { token } from "./token";

queryStore.setServerClient(sharedClient.withConfig({ token }));

export const { loadQuery: loadSharedQuery } = queryStore;
