import app from "./app";

const port: number = 3000;

async function main() {
  try {
    const server = app.listen(port, () => {
      console.log("SerVER Running");
    });
  } catch (error) {
    console.log(error);
  }
}
main();
