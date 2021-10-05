import { Repos } from "../database";
import { setupControllers, Controllers } from "./controllers";
import { setupUseCases, UseCases } from "./use-cases";

export interface Application {
  useCases: UseCases;
  controllers: Controllers;
}

// wrapper for initializing controllers
export const setupApplication = (repos: Repos): Application => {
  const useCases = setupUseCases(repos);
  const controllers = setupControllers(useCases);

  return {
    useCases,
    controllers,
  };
};
