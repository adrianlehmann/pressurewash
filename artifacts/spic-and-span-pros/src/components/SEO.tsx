import { Helmet } from 'react-helmet-async';

export function SEO() {
  const schemaLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Spic & Span Pros Power Washing, Window & Gutter Cleaning',
    telephone: '(732) 648-4094',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '301 N Randolphville Rd Apt 73',
      addressLocality: 'Piscataway',
      addressRegion: 'NJ',
      postalCode: '08854',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    url: 'https://spicandspanpros.com',
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between power washing and soft washing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Power washing uses high-pressure water to blast away dirt and grime from hard surfaces. Soft washing uses low pressure with specialized cleaning solutions, perfect for delicate surfaces like siding, roofs, and wood.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often should I have my house washed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend every 1–2 years depending on your climate, tree cover, and exposure to humidity and pollution.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you clean interior windows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Our window cleaning service includes both interior and exterior window cleaning, frame cleaning, and screen cleaning.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can power washing damage my home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In the hands of professionals, power washing is completely safe. We assess every surface and use appropriate pressure and solutions for each material.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you clean gutters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Our gutter cleaning service removes all debris and ensures proper water flow to protect your foundation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you remove algae and moss?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in safely removing algae, moss, mold, and organic staining from all exterior surfaces.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you clean solar panels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — professional solar panel cleaning to remove dirt and buildup that reduces energy efficiency.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most residential projects take 2–6 hours depending on size and services requested.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are estimates free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, completely free no-obligation estimates for all services.',
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>Spic & Span Pros | Power Washing, Window & Gutter Cleaning | Piscataway, NJ</title>
      <meta
        name="description"
        content="Professional power washing, soft washing, window cleaning, and gutter cleaning in Piscataway, NJ. Family-owned since 2017. Free estimates. Call (732) 648-4094."
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="Spic & Span Pros | Power Washing, Window & Gutter Cleaning | Piscataway, NJ"
      />
      <meta
        property="og:description"
        content="Professional power washing, soft washing, window cleaning, and gutter cleaning in Piscataway, NJ. Family-owned since 2017. Free estimates. Call (732) 648-4094."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spicandspanpros.com" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaLocalBusiness)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(schemaFAQ)}
      </script>
    </Helmet>
  );
}
