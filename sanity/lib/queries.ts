import { defineQuery } from "next-sanity";

// This query fetches your navbar settings from Sanity
export const NAVBAR_QUERY = defineQuery(`*[_type == "navbar"][0]{
  brandName,
  navLinks,
  ctaLabel
}`);

export const LAYOUT_QUERY = `{
  "navData": *[_type == "navbar"][0]{
    brandName,
    navLinks, // This ensures the Blog link is fetched
    ctaLabel
  },
  "footerData": *[_type == "footer"][0]
}`;
