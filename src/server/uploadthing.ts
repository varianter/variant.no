import { createUploadthing } from "uploadthing/next-legacy";
import type { FileRouter } from "uploadthing/next-legacy";
import { UTApi } from 'uploadthing/server';
const f = createUploadthing({
  /**
   * Log out more information about the error, but don't return it to the client
   * @see https://docs.uploadthing.com/errors#error-formatting
   */
  errorFormatter: (err) => {
    console.log("Error uploading file", err.message);
    console.log("  - Above error caused by:", err.cause);

    return { message: err.message };
  },
});

/**
 * This is your Uploadthing file router. For more information:
 * @see https://docs.uploadthing.com/api-reference/server#file-routes
 */
export const uploadRouter = {
  videoAndImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
    video: {
      maxFileSize: "16MB",
    },
  })
    .middleware(({ req }) => {
      // Check some condition based on the incoming requrest
      req;
      //^?
      // if (!req.headers["x-some-header"]) {
      //   throw new Error("x-some-header is required");
      // }

      // Return some metadata to be stored with the file
      return { foo: "bar" as const };
    })
    .onUploadComplete(({ file, metadata }) => {
      metadata;
      // ^?
      console.log("upload completed", file);
    }),
} satisfies FileRouter;

export const utapi = new UTApi({
    apiKey: process.env.UPLOADTHING_SECRET
})
export type OurFileRouter = typeof uploadRouter;