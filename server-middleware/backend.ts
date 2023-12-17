import { RequestHandler } from 'express';
import fetch, { RequestInit, Response } from 'node-fetch';

const backendMiddleware: RequestHandler = async (req, res) => {
    try {
        const backendUrl = 'http://localhost:8080';
        const apiUrl = `${backendUrl}${req.originalUrl}`;

        const headers: RequestInit['headers'] = {
            'Content-Type': 'application/json',
        };

        const backendResponse: Response = await fetch(apiUrl, {
            method: req.method as RequestInit['method'],
            headers,
            body: JSON.stringify(req.body),
        });

        const responseBody = await backendResponse.json();

        const responseHeaders: Record<string, string> = {};
        backendResponse.headers.forEach((value, key) => {
            responseHeaders[key] = value;
        });

        res.writeHead(backendResponse.status, responseHeaders);
        res.end(JSON.stringify(responseBody));
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};

export default backendMiddleware;