import type { Request, Response } from 'express'
import express from 'express'

import { activeJobs, activeJobByToken } from '../../wagers'

const router = express.Router()

router.get(
  '/',
  async (_: Request, res: Response): Promise<Response> => {
    const jobs = await activeJobs()
    return res.status(200).json({
      jobs,
    })
  },
)

router.get(
  '/:token_id',
  async (req: Request, res: Response): Promise<Response> => {
    const job = await activeJobByToken(parseInt(req.params.token_id))
    return res.status(200).json({
      job,
    })
  },
)

module.exports = router
