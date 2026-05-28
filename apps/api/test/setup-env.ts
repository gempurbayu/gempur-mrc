process.env.DATABASE_URL ??= 'postgresql://ci_user:ci_password@localhost:5432/gempur_mrc_test';
process.env.TYPEORM_SYNC ??= 'false';
process.env.API_PORT ??= '3000';
process.env.WEB_ORIGIN ??= 'http://localhost:5173';
