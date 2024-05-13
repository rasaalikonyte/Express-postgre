const request = require("supertest");
const app = require("./app");

describe("GET /todos", () => {
  test("respond with JSON message", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toEqual(200);
    // expect(response.body.length).toEqual(3);
  });
});

// describe("POST /todos", () => {
//   test("respond with JSON message and create a user", async () => {
//     const userData = { name: "John Dove", email: "john@example.com" };
//     const response = await request(app).post("/todos").send(userData);

//     expect(response.statusCode).toBe(201);
//     expect(response.body).toEqual({
//       name: userData.name,
//     });
//   });
// });
