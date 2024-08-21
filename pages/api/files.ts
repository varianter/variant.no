import {utapi} from '../../src/server/uploadthing'

export default async function handler(req:any, res:any) {
    const data = await utapi.listFiles();
    res.status(200).json(data);
}