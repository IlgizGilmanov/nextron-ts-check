declare global {
  interface Window {
    versions?: {
      ping?: () => {};
    };
  }
}

export {};
