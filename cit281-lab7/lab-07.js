
class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
   
  try {
    console.log("trying to force a generic error...");
    throwGenericError();
  } catch (error) {
    console.log("caught an error:", error);
  } finally {
    console.log("finally block executed.");
  }
  
  try {
    console.log("trying to force a custom error...");
    throwCustomError();
  } catch (error) {
    if (error instanceof CustomError){
        console.log("Caught an error:", error);
    } else {
        throw error;
    }

  } finally {
    console.log("finally block executed.");
  }
  