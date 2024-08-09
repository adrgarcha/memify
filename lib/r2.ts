import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';

export const R2_PUBLIC_URL = process.env.CLOUDFLARE_R2_PUBLIC_URL!;
const R2_ENDPOINT = `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`;
const Bucket = 'memify';

const client = new S3Client({
   region: 'auto',
   endpoint: R2_ENDPOINT,
   credentials: {
      accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_ID!,
      secretAccessKey: process.env.CLOUDFLARE_R2_ACCESS_SECRET!,
   },
});

export interface R2Template {
   key: string;
   url: string;
}

export async function getR2Templates() {
   const command = new ListObjectsV2Command({ Bucket });
   const response = await client.send(command);
   return response.Contents?.map(content => {
      return {
         key: content.Key,
         url: `${R2_PUBLIC_URL}/${content.Key}`,
      };
   }) as R2Template[];
}
