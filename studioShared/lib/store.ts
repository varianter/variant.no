import {createQueryStore} from "@sanity/react-loader";

import { sharedClient } from "./client";
import { token } from "./token";

const {
    loadQuery: loadSharedQuery,
    setServerClient,
  } = createQueryStore({client: false, ssr: true})

setServerClient(sharedClient.withConfig({ token }));

export { loadSharedQuery }; 
