# Architecture rules

- Keep the concert banner photo URL in the central concert configuration and reuse it on both pages so image replacements stay consistent.- Third-party content (YouTube, Brevo) is wrapped in `ExternalEmbed` and Google Analytics loads only via `src/lib/consent.ts` after consent; fonts are self-hosted via @fontsource — keeps the site free of pre-consent third-party requests.
