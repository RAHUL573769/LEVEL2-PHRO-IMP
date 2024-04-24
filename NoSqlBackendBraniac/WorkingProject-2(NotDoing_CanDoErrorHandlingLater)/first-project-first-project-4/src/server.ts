import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(3000, () => {
      console.log('app is listening on port ');
    });
  } catch (err) {
    console.log(err);
  }
}

main();
