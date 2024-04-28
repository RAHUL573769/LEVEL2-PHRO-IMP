import { PrismaClient, UsersRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { fileUploader } from "../../helpers/fileUploader";
import { IFile } from "../../types/filetypes";

const createAdmin = async (req: any) => {
	const prisma = new PrismaClient();
	console.log("File From User Services", req.file);
	console.log("Data From User Services", req.body);

	const file = req.file;
	// console.log("Files", file);
	if (file) {
		const uploadToClodinary = await fileUploader.uploadToCloudinary(file);
		console.log("Upload cloudinary", uploadToClodinary);
		// console.log("Data from Create Admin Service", uploadToClodinary);

		req.body.data.admin.profilePhoto = uploadToClodinary?.secure_url;
		// data.body.admin.profilePhoto = uploadToClodinary?.secure_url;

		console.log("data ", req.body);
	}
	const hashedPassword: string = await bcrypt.hash(req.password, 12);
	// console.log("Hashed Password", hashedPassword);
	const userData = {
		email: req.admin.email,
		password: hashedPassword,
		role: UsersRole.ADMIN,
	};
	const adminData = {
		name: req.admin.name,
	};

	const result = await prisma.$transaction(async (transactionClient) => {
		const createdUserData = await transactionClient.user.create({
			data: userData,
		});
		const createDAdminData = await transactionClient.admin.create({
			data: req.admin,
		});
		return createDAdminData;
	});
	return result;
};

export const UserService = {
	createAdmin,
};
