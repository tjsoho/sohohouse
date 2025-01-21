interface Window {
  gtag: (
    command: string,
    eventName: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 