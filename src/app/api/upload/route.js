/**This component is responsible for uploading images to the aws server */
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';

export async function POST(req) {

	const formData = await req.formData()

	if (formData.has('file')) {
		const file = formData.get('file');

		// console.log(file, "file...")

		// a client can be shared by different commands.
		const s3Client = new S3Client({
			region: process.env.S3_REGION_NAME,
			credentials: {
				accessKeyId: process.env.S3_ACCESS_KEY,
				secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
			}
		});

		const fileExtension = file.name.split('.').pop();
		const randomId = uniqid();
		const newFileName = randomId + '.' + fileExtension;
		const bucketName = process.env.BUCKET_NAME

		// console.log(newFileName, "newFileName")

		const chunks = [];
		for await (const chunk of file.stream()) {
			chunks.push(chunk);
		}

		// Convert chunks to Uint8Array
		const fileData = new Uint8Array(Buffer.concat(chunks));

		await s3Client.send(new PutObjectCommand({
			Bucket: bucketName,
			Key: newFileName,
			ACL: 'public-read',
			Body: fileData,
			contentType: file.type,
		}))

		// body: Buffer.concat(chunks),
		const link = `http://s3.${process.env.S3_REGION_NAME}.amazonaws.com/${bucketName}/${newFileName}`
		// const link = `http://${bucketName}.s3.amazonaws.com/${newFileName}`

		return Response.json(link)
	}
}
