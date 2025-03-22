import config from '../config/config';
import { Service } from './config-appwrite';
import { ID } from 'appwrite';

export class StorageService extends Service {
    async uploadProfileImage(file) {
        try {
            // Upload file to storage
            const uploadedFile = await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            );

            // Get file preview URL
            const fileUrl = this.bucket.getFilePreview(
                config.appwriteBucketId,
                uploadedFile.$id
            );

            return {
                fileId: uploadedFile.$id,
                fileUrl
            };
        } catch (error) {
            console.error('StorageService :: uploadProfileImage :: error', error);
            throw error;
        }
    }

    async deleteProfileImage(fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.error('StorageService :: deleteProfileImage :: error', error);
            throw error;
        }
    }
}

const storageService = new StorageService();
export default storageService;