import { Response, Router } from "express";

const router = Router();

router.get("/", (_, res: Response) => {
    return res.status(200).json({
        success: true,
        status: 'Running',
        version: 1.0
    })
})
export default router;