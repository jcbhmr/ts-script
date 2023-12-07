# &lt;ts-script>: The TypeScript Script element

The `<ts-script>` HTML element is used to embed executable code or data; this is typically used to embed or refer to TypeScript code. The `<ts-script>` element can only be used with TypeScript code.

<table>
<tr>
  <th>Content categories
  <td>Metadata content, Flow content, Phrasing content
<tr>
  <th>Permitted content
  <td>Dynamic TypeScript script code, or a single element <code>&lt;script></code>, <code>&lt;style></code>, <code>&lt;textarea></code>, <code>&lt;xmp></code>, <code>&lt;plaintext></code> with optional surrodounding whitespace text nodes.
<tr>
  <th>Tag omission
  <td>None, both the starting and ending tag are mandatory.
<tr>
  <th>Permitted parents
  <td>Any element that accepts metadata content, or any element that accepts phrasing content. Must be a descendant of the <code>&lt;body></code>.
<tr>
  <th>Implicit ARIA role
  <td>No corresponding role
<tr>
  <th>Permitted ARIA roles
  <td>No <code>role</code> permitted
</table>

## Attributes

This element includes the global attributes.

<dl>
<dt><code>async</code>
<dd>

For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.

For module scripts, if the async attribute is present then the scripts and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.

This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. defer has a similar effect in this case.

This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

<dt><code>blocking</code>
<dd>

This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes listed below.

- `render`: The rendering of content on the screen is blocked.

<dt><code>crossorigin</code>
<dd>

Normal script elements pass minimal information to the `window.onerror` for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.

<dt><code>defer</code>
<dd>

This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.

Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.

> [!WARNING]
> This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.

The defer attribute has no effect on module scripts — they defer by default.

Scripts with the defer attribute will execute in the order in which they appear in the document.

This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. `async` has a similar effect in this case.

<dt><code>fetchpriority</code>
<dd>

Provides a hint of the relative priority to use when fetching an external script. Allowed values:

<dl>
<dt><code>high</code>
<dd>Signals a high-priority fetch relative to other external scripts.
<dt><code>low</code>
<dd>Signals a low-priority fetch relative to other external scripts.
<dt><code>auto</code>
<dd>Default: Signals automatic determination of fetch priority relative to other external scripts.
</dl>

<dt><code>integrity</code>
<dd>

This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See Subresource Integrity.

<dt><code>nomodule</code>
<dd>

This Boolean attribute is set to indicate that the script should not be executed in browsers that support ES modules — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.

<dt><code>nonce</code>
<dd>

A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.

> [!CAUTION]
> This is exposed as a JavaScript property but never used in execution. This `<ts-script>` uses `import()` with `blob:` URLs to dynamically transpile and execute the fetched TypeScript code as native JavaScript.

<dt>

</dl>