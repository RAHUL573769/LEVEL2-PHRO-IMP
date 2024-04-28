import prisma from "../../../shared/prisma";

// const updateIntoDb = async (id: string, payload: any) => {
// 	const { specialities, ...doctorData } = payload;
// 	console.log(specialities);
// 	// console.log(doctorData);

// 	const doctorInfo = await prisma.doctor.findFirstOrThrow({
// 		where: { id },
// 	});

// 	const result = await prisma.$transaction(async (transactionClient) => {
// 		const updatedDoctor = await transactionClient.doctor.update({
// 			where: { id },
// 			data: doctorData,
// 			include: {
// 				doctorSpecialties: true,
// 			},
// 		});

// 		if (specialities && specialities.length > 0) {
// 			const deleteSpeciliatiIds = specialities.filter();
// 		}

// 		for (const specialistId of specialities) {
// 			const createDoctorSpecialities =
// 				await transactionClient.doctorSpecialties.create({
// 					data: {
// 						doctorId: doctorInfo.id,
// 						specialitiesId: specialistId,
// 					},
// 				});
// 			console.log(createDoctorSpecialities);
// 		}

// 		return updatedDoctor;
// 	});

// 	return result;
// };

const updateIntoDb = async (id: string, payload: any) => {
	const { specialties, ...doctorData } = payload;

	const doctorInfo = await prisma.doctor.findUniqueOrThrow({
		where: {
			id,
		},
	});

	await prisma.$transaction(async (transactionClient) => {
		await transactionClient.doctor.update({
			where: {
				id,
			},
			data: doctorData,
		});

		if (specialties && specialties.length > 0) {
			// delete specialties
			const deleteSpecialtiesIds = specialties.filter(
				(specialty) => specialty.isDeleted
			);
			//console.log(deleteSpecialtiesIds)
			for (const specialty of deleteSpecialtiesIds) {
				const createDoctorSpecialities =
					await transactionClient.doctorSpecialties.deleteMany({
						where: {
							doctorId: doctorInfo.id,
							specialitiesId: specialty.specialtiesId,
						},
					});
			}

			// create specialties
			const createSpecialtiesIds = specialties.filter(
				(specialty) => !specialty.isDeleted
			);
			console.log(createSpecialtiesIds);
			for (const specialty of createSpecialtiesIds) {
				await transactionClient.doctorSpecialties.create({
					data: {
						doctorId: doctorInfo.id,
						specialitiesId: specialty.specialtiesId,
					},
				});
			}
		}
	});

	const result = await prisma.doctor.findUnique({
		where: {
			id: doctorInfo.id,
		},
		include: {
			doctorSpecialties: {
				include: {
					specialities: true,
				},
			},
		},
	});
	return result;
};
export const DoctorServices = { updateIntoDb };
