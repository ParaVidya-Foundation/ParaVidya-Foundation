/**
 * Google Tag Manager Noscript Component
 * MUST be placed immediately after the opening <body> tag
 * 
 * Usage in layout.tsx:
 * <body>
 *   <GTMNoscript />
 *   ...
 * </body>
 */

interface GTMNoscriptProps {
  gtmId?: string;
}

export function GTMNoscript({ 
  gtmId
}: GTMNoscriptProps) {
  // Hardcoded production value
  const finalGtmId = gtmId || "GTM-MW2F23VZ";
  
  if (!finalGtmId) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${finalGtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
