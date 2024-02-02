import prisma from '../prisma';
import {
  Role,
  Permission,
  PermissionAssignment,
} from './auth-seeds';

const main = async () => {
  await prisma.user.deleteMany();
  await prisma.permissionRole.deleteMany();
  await prisma.role.deleteMany();
  await prisma.permission.deleteMany();

  for (const role in Role) {
    await prisma.role.create({
      data: {
        name: Role[role],
      },
    });
  }

  for (const permission in Permission) {
    await prisma.permission.create({
      data: {
        name: Permission[permission],
      },
    });
  }

  for (const role in PermissionAssignment) {
    const roleRecord = await prisma.role.findFirst({
      where: {
        name: role,
      },
    });
    for (const permission of PermissionAssignment[role]) {
      const permissionRecord =
        await prisma.permission.findFirst({
          where: {
            name: permission,
          },
        });

      await prisma.permissionRole.create({
        data: {
          role_id: roleRecord?.id,
          permission_id: permissionRecord?.id,
        },
      });
    }
  }
};

main().catch((e) => {
  throw e;
});
