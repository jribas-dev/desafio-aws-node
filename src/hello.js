"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Node.js Serverless v16! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports = {
    handler:hello
}
