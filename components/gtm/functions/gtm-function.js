export const pageviewGTM = (url) => {
  if (window !== undefined) {
    window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const eventGTM = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
