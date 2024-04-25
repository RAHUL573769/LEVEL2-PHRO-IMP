import multer from "multer";
import path from "path";

import { v2 as cloudinary } from "cloudinary";
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// cb(null, "/uploads");
		cb(null, path.join(process.cwd(), "uploads"));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		cb(null, file.originalname);
	},
});

cloudinary.config({
	cloud_name: "dzudrvcao",
	api_key: "524312468742691",
	api_secret: "Eca-LoAGdbD6Qrc3_M0VbSmxF8k",
});
// cloudinary.uploader.upload(
// 	"F:\\A_LEVEL2IMP\\Prisma\\Ph-HealtCare\\Module-30\\uploads\\1566396610444.jpg",
// 	// "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
// 	{ public_id: "olympic_flag" },
// 	function (error, result) {
// 		console.log(result);
// 		console.log(error);
// 	}
// );

export const uploadToCloudinary = async (file: any) => {
	// console.log("File From  Cloudinary Function", file);

	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload(
			file.path,
			// "F:\\A_LEVEL2IMP\\Prisma\\Ph-HealtCare\\Module-30\\uploads\\1566396610444.jpg",
			// "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
			{ public_id: file.originalname },
			(error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			}
		);
	});
};
export const upload = multer({ storage: storage });
