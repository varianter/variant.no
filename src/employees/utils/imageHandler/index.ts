import { handleImages as handleImages_blob } from './blob';
import { handleImages as handleImages_local } from './local';

export const handleImages =
  process.env.NODE_ENV !== 'development' || process.env.BLOB_OVERRIDE == 'true'
    ? handleImages_blob
    : handleImages_local;
