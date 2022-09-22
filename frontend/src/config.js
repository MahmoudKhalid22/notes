const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51LjLgdLxNRZStlHMlszuB7H8QIl4QeaaTKiHeU6fZxnJ7SgHoZlxneIfBEwnxkTDyZBSAcwSp1a30cSq70vQVpUP003ynPDgK5",

  SENTRY_DSN:
    "https://e21PkpepRZgrdV76EPB8t3akXe4W5icWkXyz@o1421952.ingest.sentry.io/6769211",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
