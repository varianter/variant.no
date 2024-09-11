/**
 * This configuration is used to for the Sanity Studio that’s mounted on the routes:
 * - `/app/studio/[[...index]]/page.tsx`
 * - `/app/studioShared/[[...index]]/page.tsx`
 */

import { defineConfig } from "sanity";
import sharedStudioConfig from "./studioShared/studioConfig";
import studioConfig from "./studio/studioConfig";

export default defineConfig([studioConfig, sharedStudioConfig]);
