import request from 'supertest';
import { app } from '../app';

import createConnection from '../database';

describe('Users', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new users", async () => {
        const response = await request(app).post("/users").send({
            email: 'user2@test.com',
            name: "User Example"
        });

        expect(response.status).toBe(201);
    })

    it("Should not be able to create a new users if it already exixts", async () => {
        const response = await request(app).post("/users").send({
            email: 'user2@test.com',
            name: "User Example"
        });

        expect(response.status).toBe(400);
    })
});