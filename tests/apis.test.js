import { test, expect } from '@jest/globals';

test("POST /api/pirates", async () => {

    const response = await fetch("http://localhost:5000/api/pirates");
    const body = response.json()

    expect(response.status).toBe(201)
    
})