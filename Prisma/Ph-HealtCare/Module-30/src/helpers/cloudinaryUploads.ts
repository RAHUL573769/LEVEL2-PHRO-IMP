import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: "dzudrvcao",
	api_key: "524312468742691",
	api_secret: "Eca-LoAGdbD6Qrc3_M0VbSmxF8k",
});
cloudinary.uploader.upload(
	"https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
	{ public_id: "olympic_flag" },
	function (error, result) {
		console.log(result);
	}
);
