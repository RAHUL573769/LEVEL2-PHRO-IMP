import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Server } from 'http';

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log('Unhandled Rejection Detected');
  if (Server) {
    server.close(() => {
      process.exit();
    });
  }

  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log('Unhandled Exception Detected');
  process.exit(1);
});

// console.log(x);
