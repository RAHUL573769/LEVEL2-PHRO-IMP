/* eslint-disable no-unused-vars */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
