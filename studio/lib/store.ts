import {createQueryStore} from "@sanity/react-loader";

import { client } from "./client";
import { token } from "./token";

const {
    loadQuery: loadStudioQuery,
    setServerClient,
  } = createQueryStore({client: false, ssr: true})

  setServerClient(client.withConfig({ token }));

export { loadStudioQuery }
