import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
    Users
    await prisma.user.create({
        data: {
            name: 'abdelrahman bourka',
            email: '222@example.com',
            password: 'password123',
        },
    });

    const data = await prisma.user.findUnique({
        where: {
            id: 2
        }, include: {
            favourites: {
                include: {
                    apartment: true
                }
            }
        }
    });
  



    Apartments
    await prisma.apartment.create({
        data: {
            address: '123111 Main St',
            city: 'New York',
            rooms: 3,
            wifi: false,
            tv: false,
            description: 'Cozy apartment ssin the heart of the city.',
            images: ['image1.jpg', 'image2.jpg'],
            ownerId:1
        },
    });

    Favourites
    await prisma.favourite.create({
        data: {
            apartmentId: 2,
            userId: 2
        }
    });

    // Histories
    await prisma.histories.create({
        data: {
            rent_start_date: new Date('2023-01-01'),
            rent_end_date: new Date('2023-01-31'),
            userId: 1, // Assuming the user with id 1 exists
            apartmentId: 1, // Assuming the apartment with id 1 exists
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });







