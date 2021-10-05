import { db, app, http } from "./setup";


const convictional = async (port: string) => {
    const repos = await db.setupMongoRepos()

  const { controllers } = app.setupApplication(repos);

  const { webServer } = http.setup(controllers);
  webServer.listen(port, () => {
    console.log(
      `Convictional API server running on http://localhost:${port}/`
    );
  });
};

const port = "3000";
convictional(port);
