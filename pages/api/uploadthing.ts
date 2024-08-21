import { createRouteHandler } from "uploadthing/next-legacy";

import { uploadRouter } from "../../src/server/uploadthing";

const handler = createRouteHandler({
  router: uploadRouter,
});

export default handler;