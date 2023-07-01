
Lien Vercel : https://project1-mern-next-auth-prisma-mongo-db.vercel.app/




Informations du Projet :
BDD : "Project1_MERN_NextAuthPrismaMongoDB"
Lien Github : "https://github.com/yoanncroguennec/Project1_MERN_NextAuthPrismaMongoDB"
Lien Vercel : "https://project1-mern-next-auth-prisma-mongo-db.vercel.app"



1. Prisma
   - Install "prisma" and "npx prisma init"
   - If error : "Server Error
Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues" 
    - Solution : "npx prisma generate"
1. SERVER - Create NextAuth
2. SERVER - Create Register
3. FRONT - Create File 


6. Error Vercel prisma :
   - Error : PrismaClientInitializationError: Prisma has detected that this project was built on Vercel, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the `prisma generate` command during the build process.
   - Solution : https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue
   - Solution : A rajouter dans le fichier "package.json", Section "scripts"
    "scripts" {
        "postinstall": "prisma generate"
    }


***
***


Listes d'autres Applications Next-Auth avec Next JS, que j'ai réalisé :

(Folder Github Public)
Next-Auth / With Prisma / MongoDB
Link Website :
Link Github :
(Folder Github Private)
Next-Auth / Without Prisma / MongoDBLink Website :
Link Github :