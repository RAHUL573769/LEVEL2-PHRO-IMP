import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: "dcgc00swy",
	api_key: "317231526124669",
	api_secret: "fuEkfnrkZtSVbOvJN48uiKtRayk",
});
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(process.cwd(), "uploads"));
	},
	filename: function (req, file, cb) {
		// const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
		// cb(null, file.fieldname + "-" + uniqueSuffix);

		cb(null, file.originalname);
	},
});
export const upload = multer({ storage: storage });
const uploadToCloudinary = (file: any) => {
	// console.log("Filess", file);

	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload(
			// "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",

			file.path,
			// "F:\\A_LEVEL2IMP\\Prisma\\Ph-HealtCare\\Module-30\\uploads\\1566396610444.jpg",

			{ public_id: file.originalname },

			(error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			}
			// { public_id: "olympic_flag" },
			// function (error, result) {
			// 	console.log(result);
			// }
		);
	});
};
export const fileUploader = { uploadToCloudinary };
