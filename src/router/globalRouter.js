import espress from "express"; //아직 express는 안 썼네 
import { routers } from "../routes";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.BREAD, globalController.breadController);

export default globalRouter;