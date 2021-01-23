# Accordion

## Installation

```
npm install @vadimfilimonov/accordion --save
```

## Usage

Layout your markup like this:

``` html
<dl>
    <dt class="js-accordion">
        <button type="button">Click me?</button>
    </dt>
    <dd>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, itaque quisquam?
        </div>
    </dd>
</dl>
```

Then create an Accordion:

``` javascript
import accordion from '@vadimfilimonov/accordion';

accordion();
```

### Styling

The base stylesheet is located at `accordion.css`. Embed it into your application's existing styling

``` css
@import '@vadimfilimonov/accordion/accordion.css';
```

or add styles for accordion's content like this:

``` css
.js-accordion + * {
    overflow: hidden;
    height: 0;
    transition: height 0.5s;
}
```
