---
layout: text
title: "Search & replace safely"
date: 2015-06-20 14:00:00
category: quicktip
tags: [Vim, Productivity]
---

<div class="message-sent">
    <img class="message-avatar" src="/assets/images/nikola.png" alt="Fabián Uribe">
    <span class="message">
        Hey Maaaa!
    </span>
    <span class="message">
        how can I replace all the occurrences of a pattern in vim ?
    </span>
</div>

<div class="message-received">
    <img class="message-avatar" src="/assets/images/duka.png" alt="Fabián Uribe">
    <span class="message">
        With confirmation dialog on each occurrence:
    </span>
    <span class="message">
{% highlight sh %}
:%s/old-word/new-word/gc
{% endhighlight %}
    </span>
</div>

<div class="message-received">
    <img class="message-avatar" src="/assets/images/duka.png" alt="Fabián Uribe">
    <span class="message">
        Without confirmation:
    </span>
    <span class="message">
{% highlight sh %}
:%s/old-word/new-word/g
{% endhighlight %}
    </span>
</div>

<div class="message-sent">
    <img class="message-avatar" src="/assets/images/nikola.png" alt="Fabián Uribe">
    <span class="message">
        Thanks Ma!
    </span>
</div>

<div class="message-received">
    <img class="message-avatar" src="/assets/images/duka.png" alt="Fabián Uribe">
    <span class="message">
        Your welcome Sonny…
    </span>
</div>
