/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:EGx30seFULjR@ep-young-cake-a47odqr9.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };