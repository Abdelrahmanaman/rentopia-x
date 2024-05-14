import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  // Users
  // await prisma.user.create({
  //     data: {
  //         name: 'abdelrahman bourka',
  //         email: 'abdelrahman222@example.com',
  //         password: 'password123',
  //     },
  // });
  //     const data = await prisma.user.findUnique({
  //         where: {
  //             id: 3
  //         }, include: {
  //             favourites: {
  //                 include: {
  //                     apartment: true
  //                 }
  //             }
  //         }
  //     });0
  // console.log(data)
  // Apartments
  await prisma.apartment.create({
    data: {
      address: "123 Main St",
      city: "New York",
      slug: "apt",
      rooms: 2,
      wifi: true,
      tv: true,
      price: 000,
      description: "Cozy apartment in the heart of the city",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1630699144641-72fa7a6b8aa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1633104069776-ea7e61258ec9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1630699144867-37acec97df5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      ownerId: "clw6nuxjk0000wcynges0b3ee",
    },
  });
  // Favourites
  // await prisma.favourite.create({
  //     data: {
  //         apartmentId: 2,
  //         userId: 2
  //     }
  // });
  // // Histories
  // await prisma.histories.create({
  //     data: {
  //         rent_start_date: new Date('2023-01-01'),
  //         rent_end_date: new Date('2023-01-31'),
  //         userId: 1, // Assuming the user with id 1 exists
  //         apartmentId: 1, // Assuming the apartment with id 1 exists
  //     },
  // });
  // Reviews
  // await prisma.reviews.create({
  //     data: {
  //         text: "This is my favourite place hooooo! The staff are so friendly",
  //         userId: 2,
  //         apartmentId: 1
  //     }
  // })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });







