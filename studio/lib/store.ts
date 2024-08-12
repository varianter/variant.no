import * as queryStore from "@sanity/react-loader";

import { client } from "./client";
import { token } from "./token";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
