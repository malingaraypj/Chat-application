const catchSocketAsync = (fn) => {
  return async function (data) {
    try {
      // here, "this" refers to the socket instance
      await fn(this, data);
    } catch (err) {
      console.error("Socket error:", err);
      if (this && typeof this.emit === "function") {
        this.emit("error", { message: err.message || "Internal server error" });
      }
    }
  };
};

export default catchSocketAsync;
