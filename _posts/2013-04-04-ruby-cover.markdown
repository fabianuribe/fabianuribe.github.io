---
layout: post
title: "Use cover? instead of include?"
date: 2013-04-04 14:00:00
category: blog
tags: [Ruby, Performance]
---

In Ruby, whenever we are evaluating if an object lies inside a range, we can use `cover?` to ask Ruby to figure it out logically using the lower and upper limit; rather than using `include?` which would instantiate each element of the range and then perform the evaluation on each instance of the range.

### Using: include?

{% highlight ruby %}
(1..10).include?(7)      # true
{% endhighlight %}

Compares to performing all these evaluations:

{% highlight ruby %}
1 == 7     # false
2 == 7     # false
3 == 7     # false
4 == 7     # false
5 == 7     # false
6 == 7     # false
7 == 7     # true
{% endhighlight %}

### Using: cover?

{% highlight ruby %}
(1..10).cover?(7)      # true
{% endhighlight %}

Compares to performing this single evaluation:

{% highlight ruby %}
7 >= 1 && 7 <= 10      # true
{% endhighlight %}

`cover?` has performance advantages on large ranges or on more complex objects; like Date objects.

You can find more information about `cover?` and `include?` on the [ruby-doc][ruby-doc] website.

[ruby-doc]: http://www.ruby-doc.org/core-1.9.3/Range.html#method-i-cover-3F
