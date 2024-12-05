const { checkForUrl } = require("../UrlChecker");

test('Test for valid and invalid URLs', () => {
    // Testing invalid URLs
    expect(checkForUrl('https:/example.com/')).toBe(false);   // Invalid format
    expect(checkForUrl('Hello')).toBe(false);                  // Not a URL

    // Testing valid URLs
    expect(checkForUrl('https://example.com/')).toBe(true);    // Valid URL
    expect(checkForUrl('https://www.google.com')).toBe(true);  // Valid URL without slash at the end
});
