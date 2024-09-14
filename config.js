import { Client, Account, ID, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('66e518a6001657b66066');                

export const account = new Account(client);
export const databases = new Databases(client);