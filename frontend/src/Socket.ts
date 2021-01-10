export const Singleton = (function () {
  let instance: WebSocket;

  function createInstance() {
    return new WebSocket("ws://localhost:9000");
    // return new WebSocket("wss://serene-wave-94653.herokuapp.com");
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
        instance.onopen = (ev) => {
          console.log("open", ev);
        };
        instance.onmessage = (ev) => {
          console.log("message", ev);
        };
        instance.onerror = (ev) => {
          console.log("error", ev);
        };
        instance.onclose = (ev) => {
          console.log("close", ev);
        };
      }
      return instance;
    },
  };
})();
