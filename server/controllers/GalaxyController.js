import { galaxyService } from "../services/GalaxyService.js"
import BaseController from "../utils/BaseController.js";

export class GalaxyController extends BaseController {
    constructor() {
        super("api/galaxy");
        this.router
            .get("", this.getAll)
            .get("/:id", this.getGalaxyById)

            //.get star

            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.delete)
    }


    async getAll(req, res, next) {
        try {
            const data = await galaxyService.find(req)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async getGalaxyById(req, res, next) {
        try {
            const data = await galaxyService.findGalaxyById(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const data = await galaxyService.create(req.body)
            return res.send(data);
        } catch (error) {
            next(error);
        }
    }

    async edit(req, res, next) {
        req.body.id = req.params.id
        try {
            let data = await galaxyService.edit(req.body)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            let data = await galaxyService.delete(req.params.id)
            return res.send(data)
        } catch (error) {
            next(error);
        }
    }

}