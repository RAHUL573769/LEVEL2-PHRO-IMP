import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test15');

    app.listen(3000, () => {
      console.log(`app is listening on port 3000`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
