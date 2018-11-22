---
layout: post
title: "Don't use % for that layout... "
description: "A tutorial on how to evenly distribute a variable number of elements on a responsive horizontal layout."
date: 2016-04-03 14:00:00
dateModified: 2016-04-23 14:00:00
category: blog
customCSS: "dont-use-percentages-for-that-layout.min.css"
tags: [Web-Development, CSS, HTML]
---

<ul id="spec">
    <li>
        <span>Mon</span>
        <img src="/assets/svgs/storms.svg" width="60" height="60" alt="storms"/>
        <span>71°</span>
        <span>47°</span>
    </li><li>
        <span>Tue</span>
        <img src="/assets/svgs/rain.svg" width="60" height="60" alt="rain"/>
        <span>70°</span>
        <span>48°</span>
    </li><li>
        <span>Wed</span>
        <img src="/assets/svgs/clear.svg" width="60" height="60" alt="clear"/>
        <span>80°</span>
        <span>49°</span>
    </li>
</ul>

Dust off your HTML and CSS and think for a second how you would implement the “weather forecast” card above.

Among the first things you’ll notice, is that the horizontal real estate needs to be distributed evenly between a number of elements (three in this case). One naive approach could be to divide the available space by three and hard-code the width of each inlined element, but since we know better and are well aware of the vast diversity of screen dimensions, we could also think of using an all mighty `display: inline-block` while throwing in some widths using percentage digits. But is it good enough?

Products will change, new features will come, some will go, new trends trigger redesigns, products will be translated into other verbose languages, and let's not don’t forget about A/B testing. This is why the fewer constraints we set in a layout, the easier will be to adopt changes and variations.

### Case Study

We are going to walk through a few different approaches that will make your and your colleague's future life easier when working with these kinds of layouts and we will start by simplifying the concepts by only using bare `<span>` elements, however, the principles will stand for more complex structures with any number of children elements.

<div class="sample sample-b">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</div>

Our solution must satisfy the following requirements:

- The elements should be distributed evenly across the available space.
- It should handle a variable number of elements.
- It should handle variable width for each element.

We will take 4 approaches, sorted descending on browser compatibility:

- Using a table
- Using display table
- Using Justify
- Using flex box

### The \<table\> element

Even though some people could laugh at the thought of using ```<table>``` elements in these days, if absolute cross-browser compatibility is a requirement, this is the way to go.

<div class="sample sample-a">
    <table>
        <tbody>
            <tr>
                <td>
                    <span>1</span>
                </td>
                <td>
                    <span>2</span>
                </td>
                <td>
                    <span>3</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="sample sample-a">
    <table>
        <tbody>
            <tr>
                <td>
                    <span>1</span>
                </td>
                <td>
                    <span>222</span>
                </td>
                <td>
                    <span>3</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="sample sample-a">
    <table>
        <tbody>
            <tr>
                <td>
                    <span>1</span>
                </td>
                <td>
                    <span>2</span>
                </td>
                <td>
                    <span>3</span>
                </td>
                <td>
                    <span>4</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="sample sample-a overflows">
    <table>
        <tbody>
            <tr>
                <td>
                    <span>1</span>
                </td>
                <td>
                    <span>2</span>
                </td>
                <td>
                    <span>3</span>
                </td>
                <td>
                    <span>4</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
table {
  text-align: center;
  width: 100%;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<table>
  <tbody>
    <tr>
      <td>
        <span>1</span>
      </td>
      <td>
        <span>2</span>
      </td>
      <td>
        <span>3</span>
      </td>
      <td>
        <span>4</span>
      </td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40" alt="Internet Explorer" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Display: table

With this approach, we get the benefits of a ```<table>``` without the performance hit.

<div class="sample sample-b">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</div>
<div class="sample sample-b">
    <div>
        <span>1</span>
        <span>222</span>
        <span>3</span>
    </div>
</div>
<div class="sample sample-b">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>
<div class="sample sample-b overflows">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
div {
  display: table;
  width: 100%;
}
span {
  display: table-cell;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40" alt="Internet Explorer" />
        <span>8+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Text-align: justify

The devil is on the details, compare the alignment with the previous examples, you will note as the name implies that
with this approach we can 'justify' the content so it starts and ends at the edges of the container element, as well as
how it wraps to the next line when the width is overflown by the content.

The way this is achieved is by inserting a pseudo element after the container element forcing the container to reach
a full width hence spacing the elements edge to edge.

<div class="sample sample-e">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-e">
    <div>
        <span>1</span>
        <span>222</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-e">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="sample sample-e overflows">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
span {
  display: inline-block
}
div {
  text-align: justify;
  width: 100%;
}
div::after {
  content: '';
  display: inline-block;
  width: 100%;
}
/* -- Internet Explorer support -- */
div:after {
  content: '';
  display: inline-block;
  width: 100%;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40" alt="Internet Explorer" />
        <span>*8+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Display: flex
The easiest way to work with complex layouts is definitely the flex-box, the draw back is the browser support. Depending on the actual objective we use two alternatives to justify: *space-around* or *space-between*.

<h4 style="text-align:center; margin-top:10px">space-around</h4>

<div class="sample sample-c">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-c">
    <div>
        <span>1</span>
        <span>222</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-c">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="sample sample-c overflows">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<h4 style="text-align:center; margin-top:10px">space-between</h4>

<div class="sample sample-d">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-d">
    <div>
        <span>1</span>
        <span>222</span>
        <span>3</span>
    </div>
</div>

<div class="sample sample-d">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="sample sample-d overflows">
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
/* Space Around */
div {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
/* Space Between */
div {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40" alt="Internet Explorer" />
        <span>10+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40" alt="Safari" />
        <span>All</span>
    </div>
</div>

### Conclusion

For the initial example, in my opinion `display: table` is the way to go, here is why:

- If the number of elements change the task is as simple as adding or removing a list element,
no CSS changes are required whatsoever.
- If the width of the images change the layout will not be affected.
- If the container gets too small the elements will not overlap with each other maintaining readability.
- Browser support is high enough to render the intended design without adding overhead to the compliant browsers.

<ul id="result">
    <li>
        <span>Mon</span>
        <img src="/assets/svgs/storms.svg" width="60" height="60" alt="storms"/>
        <span>71°</span>
        <span>47°</span>
    </li>
    <li>
        <span>Tue</span>
        <img src="/assets/svgs/rain.svg" width="60" height="60" alt="rain"/>
        <span>70°</span>
        <span>48°</span>
    </li>
    <li>
        <span>Wed</span>
        <img src="/assets/svgs/clear.svg" width="60" height="60" alt="clear"/>
        <span>80°</span>
        <span>49°</span>
    </li>
</ul>

<div class="code-type-label">CSS</div>
{% highlight css %}
ul {
    border: 9px solid #333;
    border-radius: 20px;
    display: table;
    margin: auto;
    padding: 14px 0;
    width: 85%;
}
li {
    display: table-cell;
    text-align: center;
}
img {
    display: block;
    margin: auto;
}
span{
    display: inline-block;
    padding: 0 4px;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<ul>
    <li>
        <span>Mon</span>
        <img src="/assets/svgs/storms.svg"
            width="60" height="60"
            alt="storms"/>
        <span>71°</span>
        <span>47°</span>
    </li>
    <li>
        <span>Tue</span>
        <img src="/assets/svgs/rain.svg"
            width="60" height="60"
            alt="rain"/>
        <span>70°</span>
        <span>48°</span>
    </li>
    <li>
        <span>Wed</span>
        <img src="/assets/svgs/clear.svg"
            width="60" height="60"
            alt="clear"/>
        <span>80°</span>
        <span>49°</span>
    </li>
</ul>
{% endhighlight %}
