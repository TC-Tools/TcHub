// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // console.log(prisma)
    console.time('init');
    // await prisma.users.create({
    //     data: {
    //         name: 'John Doe 2',
    //         email: 'jhon2@azure.com',
    //     },
    // });
    const allUsers = await prisma.users.findMany();
    console.timeEnd('init')
    console.log(allUsers);
}
main()