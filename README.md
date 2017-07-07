# critical rendering path

1. Process HTML markup and build the DOM tree.
2. Process CSS markup and build the CSSOM tree.
3. Combine the DOM and CSSOM into a render tree.
4. Run layout on the render tree to compute geometry of each node.
5. Paint the individual nodes to the screen.

# HTML

When .html response returns (not take streaming html chunks into consideration), which is known as  performance.timing.responseEnd, browser starts to parse HTML (bytes -> characters -> tokens -> nodes -> DOM).

If browser meets any external resource link, like javascript, stylesheet and image, it will immediately open a http connection to download it (if connections are enough). Some downloads may block HTML parsing process, like download scripts from default script tag.

Some resources will be executed after downloaded, immediately or scheduled some future time. Immediately execution would block HTML parsing, like execute (parsing) stylesheets, or execute scripts.

HTML parsing can be blocked by:

1. parsing external stylesheets
2. executing inline scripts
3. downloading external scripts with default (without `defer` and `async`) script tag
4. executing external scripts with `async` attribute

External scripts with `defer` attribute would be executed before `DOMContentLoaded` and after DOM construction (`dom.readyState` is 'interactive').

# Javascript

We care about when to download and when to execute, and how they affect DOM / CSSOM construction.

inline javascript
default `script` tag
defer `script` tag
async `script` tag
dynamic `script` tag
 - before DOM construction (domInteractive)
 - before DOMContentLoaded
 - before onload
 - after onload (completed defer)

# CSS

`link` is a render-blocking resources, because it will block CSSOM construction. Media query is able to make `link` less blocking.

```html
<link href="style.css" rel="stylesheet">
<link href="print.css" rel="stylesheet" media="print">
<link href="other.css" rel="stylesheet" media="(min-width: 40em)">
```

inline style
default <link>
media <link>
dynamic <link>
 will download / parsing block script execution?

# DOMContentLoaded

1. After DOM construction
2. defer scripts executed
3. there are no stylesheets that are blocking scripts execution

CSSOM is ready?
-> maybe

Render Tree is ready to build?
-> maybe

before first paint
after first paint
before parsing stylesheet
after parsing stylesheet
