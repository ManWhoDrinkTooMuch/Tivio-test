const {Storage, TransferManager} = require('@google-cloud/storage');

// Creates a client
const folderName = 'tivio-app-upload-images';
const storage = new Storage();

// Creates a transfer manager client
const transferManager = new TransferManager(storage.bucket(bucketName));

async function downloadFolderWithTransferManager() {
  // Downloads the folder
  await transferManager.downloadManyFiles(folderName);

  console.log(
    `gs://${bucketName}/${folderName} downloaded to ${folderName}.`
  );
}

downloadFolderWithTransferManager().catch(console.error);