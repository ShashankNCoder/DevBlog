import config from '../config/config';

import { Client, Account, ID, Databases, Storage, Query, Flag } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId, category}){
        try {
            // Format slug: lowercase, replace spaces with hyphens, remove special chars except allowed ones
            const formattedSlug = slug
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-_\.]/g, '')
                .substring(0, 36); // Ensure max 36 chars

            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                formattedSlug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    category
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
            throw error; // Re-throw to handle in the UI
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // Get user details
    async getUser(userId) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                'users',  // Collection ID for users
                userId
            );
        } catch (error) {
            console.log("Appwrite service :: getUser :: error", error);
            return null;
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            // Check if user is authenticated
            const account = new Account(this.client);
            const user = await account.get();
            if (!user) {
                throw new Error('User not authenticated');
            }
            
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service