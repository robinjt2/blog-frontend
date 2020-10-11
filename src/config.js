export default{
    s3: {
        REGION: "eu-west-2",
        BUCKET: "robins-note-app-uploads"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://jskr7hcso3.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_Y7KJum9dC",
        APP_CLIENT_ID: "5qch5mi4vldu2up888rs0rk7pk",
        IDENTITY_POOL_ID: "eu-west-2:d985f1f1-c471-457a-82f0-5cd90a2721de"
    }
};