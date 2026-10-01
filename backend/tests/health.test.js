
const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("../app");

test("GET /health returns the expected status", async () => {
  const server = app.listen(0, "127.0.0.1");

  try {
    await new Promise((resolve) => server.once("listening", resolve));

    const address = server.address();
    const response = await fetch(`http://127.0.0.1:${address.port}/health`);

    assert.equal(response.status, 200);

    const body = await response.json();
    assert.equal(body.status, "OK");
    assert.equal(body.service, "STORVIA Backend");
    assert.ok(!Number.isNaN(Date.parse(body.timestamp)));
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
  }
});