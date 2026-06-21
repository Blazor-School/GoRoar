# Include

**Full documentation:** https://webawesome.com/docs/components/include


`<wa-include>`

Stable [Helpers](https://webawesome.com/docs/components/?category=helpers) [Since 2.0](https://webawesome.com/docs/resources/changelog#wa_200)

Fetches an external HTML file and embeds its contents inline on the page. Useful for reusing shared markup like headers, footers, and partials across multiple pages.

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<wa-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html
<wa-include src="https://shoelace.style/assets/examples/include.html"></wa-include>
```

## Examples

Link to This Section

### Listening for Events

Link to This Section

When an include file loads successfully, the `wa-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `wa-include-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<wa-include src="https://shoelace.style/assets/examples/include.html"></wa-include>

<script>
  const include = document.querySelector('wa-include');

  include.addEventListener('wa-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('wa-include-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
</script>
```

## Attributes & Properties

| Attribute | Property | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `src` |  | `string` |  | The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks. |
| `mode` |  | `'cors' \| 'no-cors' \| 'same-origin'` | `'cors'` | The fetch mode to use. |
| `allow-scripts` | `allowScripts` | `boolean` | `false` | Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks. |
| `dir` |  | `string` |  |  |
| `lang` |  | `string` |  |  |
| `did-ssr` | `didSSR` |  |  |  |

## Events

| Event | Description |
| --- | --- |
| `wa-load` | Emitted when the included file is loaded. |
| `wa-include-error` | Emitted when the included file fails to load due to an error. |
