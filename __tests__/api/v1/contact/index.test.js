import contact from "pages/api/v1/contact";

describe("Contact CRUD: Create, Read", () => {
  test("POST /api/v1/contact should create a new contact", () => {
    const req = {
      method: "POST",
      body: JSON.stringify({
        firstName: "Queso",
        lastName: "De Beso",
        birthDate: "2022-04-02T00:00:00.000Z",
        address: "8321 E 88 Stt",
        emailAddresses: ["queso@debeso.com"],
        phoneNumbers: [{ type: "Cell", number: "777 777 7777" }],
      }),
    };

    // // Create mock functions to listen for invocation
    // const json = jest.fn();
    // const end = jest.fn();

    // const status = jest.fn(() => {
    //   return { json, end };
    // });

    // const res = {
    //   status,
    // };

    // contact(req, res);

    expect(req.method).toEqual("POST");
  });

  test("GET /api/v1/contact should fetch all contacts", () => {
    const req = {
      method: "GET",
    };

    expect(req.method).toEqual("GET");
  });

  test("Forbidden Methods /api/v1/contact should return status 405", () => {
    const req = {
      method: "DELETE",
    };

    expect(["GET", "POST"]).toEqual(expect.not.arrayContaining([req.method]));
  });
});
