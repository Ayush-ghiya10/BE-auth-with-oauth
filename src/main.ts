import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { createClient } from 'redis';
import * as session from 'express-session';
import RedisStore from 'connect-redis';
import { randomUUID } from 'crypto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // const client = createClient({
  //   url: 'redis://default:7beef3c3d5464ed6aa9b14101cf8935a@us1-secure-bunny-40427.upstash.io:40427',
  // });

  const client = createClient({
    url: 'redis://localhost:6379',
  });
  client
    .connect()
    .then(() => console.log('redis connected'))
    .catch(() => console.log('failed'));

  const redisStore = new RedisStore({ client: client });
  app.use(
    session({
      store: redisStore,
      secret: 'your_session_secret',
      resave: false,
      saveUninitialized: false,

      cookie: {
        httpOnly: true,
        sameSite: 'strict',
        secure: false,
        maxAge: 2 * 60 * 60 * 1000,
      },
      genid: (req) => (req.sessionID = randomUUID()),
    }),
  );

  app.use(json({ limit: '20mb' }));
  await app.listen(3001, '0.0.0.0');
}
bootstrap();
