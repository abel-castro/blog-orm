import { Request, Response, NextFunction } from "express";
import * as postService from "./postService"
import { pipeline } from "stream/promises";
import Disassembler from 'stream-json/Disassembler';
import Stringer from 'stream-json/Stringer';

export async function getAll(req: Request, res: Response, next: NextFunction) {
    try {
        const posts = await postService.getAll();
        res.status(200);
        res.json(posts);
    } catch (error) {
        next(error);
    }
}

export async function getAllStream(req: Request, res: Response, next: NextFunction) {
    try {
        const stream = await postService.getAllStream();
        res.setHeader('Content-Type', 'application/json');
        const tokenizer = new Disassembler();
        const jsonStream = new Stringer({ makeArray: true });
        pipeline(stream, tokenizer, jsonStream, res)
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
}
