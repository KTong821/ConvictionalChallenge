import { routerSetup } from './routing'
import { serverSetup } from './web-server'
import { Controllers } from '../../application'


export const setup = (
  controllers: Controllers,
) => {
  const apiRouter = routerSetup(controllers)
  const webServer = serverSetup(apiRouter);

  return {
    apiRouter,
    webServer,
  }
}

