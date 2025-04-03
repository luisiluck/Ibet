const url = function(value: string) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
      return class extends constructor {
        url: string = value;
      };
    };
  }
 
 export {url}