import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

/**
 * Server-side sanitization utility
 * Sanitizes user input to prevent XSS attacks
 */

// Create a JSDOM window for server-side DOMPurify
const { window } = new JSDOM('');
const purify = DOMPurify(window as unknown as Window & typeof globalThis);

/**
 * Sanitize HTML string to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  return purify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href'],
  });
}

/**
 * Sanitize plain text (removes all HTML)
 */
export function sanitizeText(text: string): string {
  return purify.sanitize(text, { ALLOWED_TAGS: [] });
}

/**
 * Sanitize email input
 */
export function sanitizeEmail(email: string): string {
  return sanitizeText(email).trim().toLowerCase();
}

/**
 * Sanitize phone number
 */
export function sanitizePhone(phone: string): string {
  // Remove all non-numeric characters except + at the start
  const cleaned = phone.replace(/[^\d+]/g, '');
  return cleaned.trim();
}

/**
 * Sanitize URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return url;
    }
    return '';
  } catch {
    return '';
  }
}

/**
 * Mask sensitive data for logging
 */
export function maskSensitiveData(data: string, type: 'email' | 'phone'): string {
  if (type === 'email') {
    const [name, domain] = data.split('@');
    if (name && domain) {
      const maskedName = name.length > 2 
        ? name.substring(0, 2) + '*'.repeat(Math.min(name.length - 2, 4))
        : '*'.repeat(name.length);
      return `${maskedName}@${domain}`;
    }
  } else if (type === 'phone') {
    return data.length > 6 
      ? data.slice(0, 2) + '*'.repeat(data.length - 6) + data.slice(-4)
      : '*'.repeat(data.length);
  }
  return '***';
}
