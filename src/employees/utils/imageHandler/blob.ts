import {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline,
  ContainerClient,
} from '@azure/storage-blob';
import { ApiEmployee } from 'src/employees/types';

if (
  !process.env.AZURE_STORAGE_ACCOUNT_NAME ||
  !process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY
) {
  throw new Error('Required Azure Storage environment variables not set');
}

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY,
);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline,
);

const containerName = 'employees';

export default async (employee: ApiEmployee, regenerate: boolean = false) => {
  // Check if images exsist already
  const userFileName = toFileName(employee.name);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  await containerClient.createIfNotExists({
    access: 'blob',
  });

  return downloadAndStore(
    userFileName,
    containerClient,
    employee.image,
    regenerate,
  );
};

export async function deleteAll() {
  const containerClient = blobServiceClient.getContainerClient(containerName);
  await containerClient.deleteIfExists();
}

async function downloadAndStore(
  fileName: string,
  containerClient: ContainerClient,
  image: ApiEmployee['image'],
  regenerate: boolean,
) {
  const request = await fetch(image.fit_thumb.url);
  const outputFileName = `${fileName}.png`;
  const blockBlobClient = containerClient.getBlockBlobClient(outputFileName);

  if (!regenerate && (await blockBlobClient.exists()))
    return blockBlobClient.url;

  await blockBlobClient.uploadData(await request.arrayBuffer(), {
    blobHTTPHeaders: { blobContentType: 'image/png' },
  });

  return blockBlobClient.url;
}

function toFileName(name: string) {
  // Could be unstable when string is large
  const baseString = name.trimStart().replace(' ', '-');
  let hash = 0,
    i,
    chr;
  for (i = 0; i < baseString.length; i++) {
    chr = baseString.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString(16);
}
