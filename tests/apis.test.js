import { test, expect } from '@jest/globals';

//create a pirate test
test("POST /api/pirates", async () => {

    const response = await fetch("http://localhost:5000/api/pirates/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": "zzor",
            "epithet": "moe",
            "age": "22",
            "combatStyle":"Swordsman",
            "role": "Cook",
            "bounty": "9999",
            "image":"bobimage.com"
        })
    });
    const data = response.json();

    expect(response.status).toBe(201);

});

