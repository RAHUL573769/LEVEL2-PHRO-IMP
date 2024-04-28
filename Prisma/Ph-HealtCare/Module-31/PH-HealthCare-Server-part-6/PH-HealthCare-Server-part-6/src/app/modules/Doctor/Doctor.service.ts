import prisma from "../../../shared/prisma";

const updateIntoDb = async (id: string, payload: any) => {
	const doctorData = await prisma.doctor.findFirstOrThrow({
		where: { id },
	});
	const updatedDoctor = await prisma.doctor.update({
		where: { id },
		data: payload,
	});
};

export const DoctorServices = { updateIntoDb };
