import { Router } from 'express';
import { sessionController } from '../controllers/session.controller';
import { asyncHandler } from '../utils/asyncHandler';

const router = Router();

router.get('/', asyncHandler(async (req, res) => sessionController.list(req, res)));
router.get('/:id', asyncHandler(async (req, res) => sessionController.getOne(req, res)));
router.post('/', asyncHandler(async (req, res) => sessionController.create(req, res)));
router.put('/:id', asyncHandler(async (req, res) => sessionController.update(req, res)));
router.delete('/:id', asyncHandler(async (req, res) => sessionController.remove(req, res)));

export default router;