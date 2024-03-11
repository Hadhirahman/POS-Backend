require('dotenv').config();
const multer = require('multer');
const multerS3 = require('multer-s3');
const {S3Client} = require('@aws-sdk/client-s3');

const myBucket = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_REGION;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: myBucket,
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, `image-${Date.now()}.img`);
    },
  }),
});
console.log(myBucket,region);

module.exports = {upload,s3Client};