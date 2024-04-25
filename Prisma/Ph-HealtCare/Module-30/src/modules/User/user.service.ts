import { PrismaClient, UsersRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { uploadToCloudinary } from "../../helpers/fileUploader";

const createAdmin = async (data: any) => {
	const prisma = new PrismaClient();
	// console.log("File From User Services", data.file);
	console.log("Data From User Services", data.body);

	const file = data.file;
	if (file) {
		const uploadToClodinary = await uploadToCloudinary(file);
		// console.log("Data from Create Admin Service", uploadToClodinary);

		// data.body.data.admin.profilePhoto = uploadToClodinary?.secure_url;
		data.body.admin.profilePhoto = uploadToClodinary?.secure_url;

		console.log("data", data.body.data);
	}
	const hashedPassword: string = await bcrypt.hash(data.password, 12);
	// console.log("Hashed Password", hashedPassword);
	const userData = {
		email: data.admin.email,
		password: hashedPassword,
		role: UsersRole.ADMIN,
	};
	const adminData = {
		name: data.admin.name,
	};

	const result = await prisma.$transaction(async (transactionClient) => {
		const createdUserData = await transactionClient.user.create({
			data: userData,
		});
		const createDAdminData = await transactionClient.admin.create({
			data: data.admin,
		});
		return createDAdminData;
	});
	return result;
};

export const UserService = {
	createAdmin,
};
