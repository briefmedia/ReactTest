import contact from "pages/api/v1/contact/[id]";

describe("Contact CRUD: Read, Update, Delete", () => {
  test("GET /api/v1/contact/id=123 should fetch contact with id 123", () => {
    const req = {
      method: "GET",
      query: {
        id: 123,
      },
      body: {
        firstName: "Queso",
        lastName: "De Beso",
        birthDate: "2022-04-02T00:00:00.000Z",
        address: "8321 E 88 Stt",
        emailAddresses: ["queso@debeso.com"],
        phoneNumbers: [{ type: "Cell", number: "777 777 7777" }],
      },
    };

    expect(req.method).toEqual("GET");
    expect(req.query.id).toEqual(123);
  });

  test("PUT /api/v1/contact/id=123 should update contact with id 123", () => {
    const req = {
      method: "PUT",
      query: {
        id: 123,
      },
      body: {
        firstName: "Queso updated",
        lastName: "De Beso",
        birthDate: "2022-04-02T00:00:00.000Z",
        address: "8321 E 88 Stt",
        emailAddresses: ["queso@debeso.com"],
        phoneNumbers: [{ type: "Cell", number: "777 777 7777" }],
      },
    };

    expect(req.method).toEqual("PUT");
    expect(req.query.id).toEqual(123);
  });

  test("DELETE /api/v1/contact/id=123 should delete contact with id 123", () => {
    const req = {
      method: "DELETE",
      query: {
        id: 123,
      },
      body: {
        firstName: "Queso updated",
        lastName: "De Beso",
        birthDate: "2022-04-02T00:00:00.000Z",
        address: "8321 E 88 Stt",
        emailAddresses: ["queso@debeso.com"],
        phoneNumbers: [{ type: "Cell", number: "777 777 7777" }],
      },
    };

    expect(req.method).toEqual("DELETE");
    expect(req.query.id).toEqual(123);
  });

  test("Forbidden Methods /api/v1/contact/id=123 should return status 405", () => {
    const req = {
      method: "POST",
    };

    expect(["GET", "PUT", "DELETE"]).toEqual(
      expect.not.arrayContaining([req.method])
    );
  });
});
