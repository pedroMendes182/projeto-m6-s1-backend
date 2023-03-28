import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      const port = 3000;
      console.log("Database connected!");
      app.listen(port, () => {
        console.log(`Server running in port ${port}`);
      });
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });
})();
