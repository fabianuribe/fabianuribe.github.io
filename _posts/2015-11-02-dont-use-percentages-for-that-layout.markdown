---
layout: post
title: "Don't use % for that layout... "
description: "A tutorial on how to evenly distribute a variable number of elements on a responsive horizontal layout."
date: 2016-04-03 14:00:00
category: blog
tags: [Web-Development, CSS, HTML]
---

<style>
    .sample .sample-contanier {
        max-width:  500px;
        margin: 0 auto;
    }
    .sample a,
    .sample a:hover
    .sample a:visited {
        color: #FAFAFA;
        background: #333333;
        font-size: 45px;
        font-family: Helvetica;
        padding: 4px 14px;
        border-radius: 5px;
        text-align: center;
        opacity: .80;
    }
    .sample {
        width: 240px;
        margin: 25px auto;
        border: 10px solid #E0E0E0;
        border-radius: 5px;
    }
    .sample.overflows {
        width: 156px;
    }
    #spec {
        border: 1px dashed #AAA;
        border-radius: 5px;
        font-family: "Noto Sans",sans-serif;
        margin: 50px auto;
        padding: 14px 0;
        width: 85%;
    }
    #result {
        border: 1px dashed #AAA;
        border-radius: 5px;
        font-family: "Noto Sans",sans-serif;
        display: table;
        margin: 45px auto;
        padding: 14px 0;
        width: 85%;
    }
    #spec li {
        display: inline-block;
        text-align: center;
        width: 33%;
    }
    #result li {
        display: table-cell;
        text-align: center;
    }
    #spec img,
    #result img {
        display: block;
        margin: auto;
    }
    #spec span,
    #result span{
        display: inline-block;
        padding: 0 4px;
    }
    #spec li span:last-of-type,
    #result li span:last-of-type{
        opacity: .5;
    }
</style>
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

Think for a second how you would structure the design above. Among the first things you'll notice is that we need to allocate the horizontal real estate evenly between a number of elements, so given that you are reading this, chances are you are all about responsive layouts, and you would probably roll up your sleeves and decide to use the all mighty `display: inline-block` while throwing in some widths using percentage digits, and call it a day.

Stop. Don't do it. Take a deep breath and think about that colleague (the one you like) or even your future self, you want to be kind to them right? Then don't make things complicated when they don't need to be.

The worst CSS you can add, is the one you didn't even need to write. This includes any styles you don't explicitly have to set, like widths in this case.

Products change, new features will be added (or dropped), new trends will change the icons, products will be translated to verbose languages, and please don't forget about A/B testing. This is why the fewer constraints we have in the layout, the easier will be to embrace changes.

For simplicity sake, our case of study will be composed by just few anchor elements, but the principles will stand for more complex hierarchies.

Our solution has to satisfy the following requirements:

- The elements should be spread evenly across the available space.
- It should handle a variable number of elements.
- It should handle variable width for each element.

We will take 4 approaches, sorted descending on browser support:

- Using a table
- Using display table
- Using Justify
- Using flex box

### The \<table\> element

Even though some people will laugh at you for using a ```<table>``` element, if absolute cross-browser compatibility is a requirement, this is the way to go.

<style>
    #Sample-A table {
        width: 100%;
        text-align: center;
    }
</style>
<div id="Sample-A" class="sample fits">
    <table>
        <tbody>
            <tr>
                <td>
                    <a href="#">1</a>
                </td>
                <td>
                    <a href="#">2</a>
                </td>
                <td>
                    <a href="#">3</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="Sample-A" class="sample fits">
    <table>
        <tbody>
            <tr>
                <td>
                    <a href="#">1</a>
                </td>
                <td>
                    <a href="#">222</a>
                </td>
                <td>
                    <a href="#">3</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="Sample-A" class="sample fits">
    <table>
        <tbody>
            <tr>
                <td>
                    <a href="#">1</a>
                </td>
                <td>
                    <a href="#">2</a>
                </td>
                <td>
                    <a href="#">3</a>
                </td>
                <td>
                    <a href="#">4</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div id="Sample-A" class="sample overflows">
    <table>
        <tbody>
            <tr>
                <td>
                    <a href="#">1</a>
                </td>
                <td>
                    <a href="#">2</a>
                </td>
                <td>
                    <a href="#">3</a>
                </td>
                <td>
                    <a href="#">4</a>
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
        <a ... >1</a>
      </td>
      <td>
        <a ... >2</a>
      </td>
      <td>
        <a ... >3</a>
      </td>
      <td>
        <a ... >4</a>
      </td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40px" alt="Internet Explorer" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40px" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40px" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40px" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Display: table

With this approach, we get the benefits of a ```<table>``` without the performance hit.

<style>
    #Sample-B div {
        width: 100%;
        display: table;
    }
    #Sample-B a {
        display: table-cell;
    }
</style>
<div id="Sample-B"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
    </div>
</div>
<div id="Sample-B"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">222</a>
        <a href="#">3</a>
    </div>
</div>
<div id="Sample-B"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>
<div id="Sample-B"  class="sample overflows">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
div {
  display: table;
  width: 100%;
}
a {
  display: table-cell;
}
{% endhighlight %}

<div class="code-type-label">HTML</div>
{% highlight html %}
<div>
  <a ... >1</a>
  <a ... >2</a>
  <a ... >3</a>
  <a ... >4</a>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40px" alt="Internet Explorer" />
        <span>8+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40px" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40px" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40px" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Text-align: justify

The devil is on the details, compare the alignment with the previous examples, you will note as the name implies that
with this approach we can 'justify' the content so it starts and ends at the edges of the container element, as well as
how it wraps to the next line when the width is overflown by the content.

The way this is achieved is by inserting a pseudo element after the container element forcing the container to reach
a full width hence spacing the elements edge to edge.

<style>
    #Sample-E a {
        display: inline-block
    }
    #Sample-E div {
        width: 100%;
        text-align: justify;
    }
    #Sample-E div::after {
        content: '';
        display: inline-block;
        width: 100%;
    }
    #Sample-E div:after {
      content: '';
      display: inline-block;
      width: 100%;
    }
</style>

<div id="Sample-E"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-E"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">222</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-E"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<div id="Sample-E"  class="sample overflows">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<div class="code-type-label">CSS</div>
{% highlight css %}
a {
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
  <a ... >1</a>
  <a ... >2</a>
  <a ... >3</a>
  <a ... >4</a>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40px" alt="Internet Explorer" />
        <span>*8+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40px" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40px" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40px" alt="Safari" />
        <span>All</span>
    </div>
</div>


### Display: flex
The easiest way to work with complex layouts is definitely the flex-box, the draw back is the browser support. Depending on the actual objective we use two alternatives to justify: *space-around* or *space-between*.

<h4 style="text-align:center; margin-top:10px">space-around</h4>

<style>
    #Sample-C div {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-around;
        justify-content: space-around;
    }
</style>
<div id="Sample-C"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-C"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">222</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-C"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<div id="Sample-C"  class="sample overflows">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<h4 style="text-align:center; margin-top:10px">space-between</h4>

<style>
    #Sample-D div {
        width: 100%;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
</style>

<div id="Sample-D"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-D"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">222</a>
        <a href="#">3</a>
    </div>
</div>

<div id="Sample-D"  class="sample">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
    </div>
</div>

<div id="Sample-D"  class="sample overflows">
    <div>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
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
  <a ... >1</a>
  <a ... >2</a>
  <a ... >3</a>
  <a ... >4</a>
</div>
{% endhighlight %}

<div class="code-type-label">Browser Support</div>
<div class="support-table">
    <div class="browser-support">
        <img src="/assets/svgs/ie.svg" width="40px" alt="Internet Explorer" />
        <span>10+</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/chrome.svg" width="40px" alt="Chrome" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/firefox.svg" width="40px" alt="Firefox" />
        <span>All</span>
    </div>
    <div class="browser-support">
        <img src="/assets/svgs/safari.svg" width="40px" alt="Safari" />
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
    border: 1px dashed #AAA;
    border-radius: 5px;
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
