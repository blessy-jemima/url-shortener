import express from 'express';
import { shortenUrl, redirectToLongUrl } from '../services/urlServices.js';

const router = express.Router();

router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectToLongUrl);

export default router;
