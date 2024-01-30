"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const AppModule_1 = require("./AppModule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule_1.AppModule, new platform_fastify_1.FastifyAdapter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map