import * as queryStore from "@sanity/react-loader";

import { client } from "./client";
import { token } from "./token";

const regularQueryStore = { ...queryStore };

regularQueryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
