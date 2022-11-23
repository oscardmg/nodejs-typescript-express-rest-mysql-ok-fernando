import request from "supertest";
import Server from "../lib/server";

describe("Post Endpoints", () => {
  let app: any;
  beforeAll(() => {
    const server = new Server();
    app = server.getApp()
  });
  it("should create a new post", async () => {
    const res = await request(app).get("/api/users/v1");

    expect(res.statusCode).toEqual(200);
  });
});
