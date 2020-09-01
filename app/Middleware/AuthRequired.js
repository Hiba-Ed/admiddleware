'use strict';

class AuthRequired {
  async handle ({ auth, response }, next) {
    try {
      await auth.check();
    } catch (error) { 
      return response.json({
        error: "Unauthorized access" 
      });
    }
    // call next to advance the request
    await next();
  }
}

module.exports = AuthRequired;
