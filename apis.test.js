import {test, expect } from jest ;

test("POST /api/pirates", async () => {

    const response = await fetch("http://localhost:5000/api/pirates");
    const data = response.json()

    expect(data.status).toBe(201)
})