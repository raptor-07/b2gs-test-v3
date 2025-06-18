export interface CountryCode {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}

declare module "*.json" {
  const content: CountryCode[];
  export default content;
}
