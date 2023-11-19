import express, { Router } from 'express';
import * as postController from './controllers';

const router: Router = Router();
router.get('', postController.getAll)
router.get('/stream', postController.getAllStream)

export default router;