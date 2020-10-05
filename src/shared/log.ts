export function debug(...args: any[]) {
  if(process.env.REACT_APP_DEBUG) {
    console.log(`[${(new Date()).toISOString()}] -`, ...args);
  }
}
