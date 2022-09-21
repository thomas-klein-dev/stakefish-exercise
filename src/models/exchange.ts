import ExchangePreview from "./exchangePreview";

type Exchange = ExchangePreview & {
  facebook_url: string;
  reddit_url: string;
  telegram_url: string;
  slack_url: string;
  twitter_handle: string;
};

export default Exchange;
