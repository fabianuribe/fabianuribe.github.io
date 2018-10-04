---
layout: post
title: "Great Pull Requests"
date: 2017-02-02 14:00:00
description: "The answer to high quality and productive teams."
category: blog
tags: [Productivity, Git]
---

Like many Software Engineers at some point, I started finding myself struggling to find any time for writing code at work; easy tasks would continually take longer than estimated, and days started lacking extra hours more than ever before. After realizing the situation wasn't just an abnormal set of weeks, I decided to look into what was going on with my time budget. So I started by identifying the categories where the bulk of my non-programming time was going into:

- *Attending Meetings*
- *Reviewing Pull Requests*
- *Mentoring*
- *Dealing with broken pipeline builds or incidents*
- *Keeping up with email and instant messages*

The exact amount of time spent on each category would fluctuate daily, but the outcome would be the same, an unresting feeling that I was not able to get done what I had planned for the day.

I started experimenting with my schedule, I became an early bird in order to get a hold of a few uninterrupted hours to tackle the most important tasks early in the morning; no email, no instant messages, no phone, no meetings. Pure concentration joy.

I quickly perceived the difference during the first week, tasks started flowing gracefully from *TO-DO* to *DONE* again. However, a side effect erupted: even though I arrived earlier to the office, I was rarely leaving earlier since most of the other responsibilities (meetings, reviewing, mentoring, email) were still there and happening on the regular schedule. Therefore I effectively just ended up increasing the time I spent working, which while it could be great for the company, it is certainly not so great for a healthy and happy balanced life. However, one obvious thing became even clearer, on those uninterrupted hours I could get so much more done than if I were to spread the same amount of time on smaller chunks during the day.

And of course this comes without surprise, there are plenty of books and studies that seek to debunk the myth of "multi-tasking", where for activities in which focus and concentration are required, big context-switching penalties come with every interruption. So I decided to focus only on ideas that could minimize interruptions in order to increase productivity instead of extending my working hours. 

Someone could easily argue that four or even five out of five of the previously mentioned categories are sources of interruption, and a storm of ideas can quickly come to mind for attempting to mitigate each one of them individually, from a drastic complete eradication to those trendy-business-book suggestions such as "*No-Meeting Wednesdays*", "*Open-office layout Roll-back*", or "*No instant messaging before Stand-up*". However, while these ideas might be well intentioned, they are not very realistic to be implemented in every setting (especially at your average non-small team/organization). I was looking for a solution that was: simple, cheap and so obvious that I could get peers and management excited about trying out. Enter "*Great Pull Requests*".

### What is a Great Pull Request?
You know it when you see it, it is beautiful and while we can't call it sexy, it sure is a good looking set of set changes nicely wrapped with all the information you need, and while the incoming change might not be simple, it is very simple to review.

### The value of a Great Pull Requests

#### Share and impulse Knowledge Growth
Whenever introducing design patterns, technologies, techniques or best practices, a "Great" pull request is better than your average blog post, as the reviewer gets a very practical and contextual case of study for associating new concepts. And not only reviewers knowledge is pushed for growth. When required, the author is compelled to research further in order to support and justify the approach and implications of their proposed changes.

#### Quality Driver
"Great" pull requests propel (or a the very least will maintain) the quality of a codebase. Thoughtful changes become contagious amongst the contributors and set the quality bar for reviewers and contributors. A great codebase quality directly correlates to fewer incidents and outages, which translates productive and happier teams.

#### Becomes documentation and a runbook for debugging
A "Great" pull request helps new team members understand and onboard to new codebases, they also simplify and expedite getting production issues under control. Since they become snapshots of the whole story in a single place, time is not wasted on tracing and investigating root causes, how things work or stabilization strategies.

#### Easier, Faster, Cheaper to review
On a great pull request, reviewers don’t waste time figuring out the context, rationale, and implications of an incoming change or feature. While context-setting might not be an issue for a tight small team, it makes a great difference on medium and large teams where many things are going on at the same time and it is hard to know what everybody else is currently working on.


### Anatomy of a Great pull request
- Code quality
- Structure
    - Thougtfull Title
    - Context and meaningful description
    - Knowledge transfer*
    - Screenshots / GIFs / Preview links*
    - Impact analysis
    - Tests coverage
    - Pending Tasks / Next steps*
- Appropiate reviewers  

**optional depending on the nature of change*

### The dangers of bad pull requests

#### Slow down product development
Bad pull requests will be inevitably procrastinated upon, they become "hot potatoes" that team members will put off reviewing until someone has to "take one for the team".

#### Timesink
Bad pull requests are less likely to be approved on a single review round, as reviewers request clarifications, they increase the chances of falling into never-ending rounds of change requests or even end up getting closed, wasting everyone's time.

#### Bad for the author's career
Bad pull requests damage the reputation of their authors, they will diminish the team's confidence on their qualifications and raise concerns amongst the management, making it harder on themselves to progress on their career.

#### Contribute to "single point of failure" situations
When only a few members understand, have the context and background of the state of a codebase, it makes it easy to become a single point of failure given the risk of such individuals being unavailable during an incident, weakening the reliability of the system.


### How does a bad pull request look like?

#### Lacks a review from the author
It is unlikely anyone will grasp the content and extent of proposed changes better than the authors themselves, it is their responsibility to both consciously and critically review themselves so that all the "rough edges" and "human errors" are polished before requesting others to spend their time on it.

#### Doesn't provide context
A pull request that doesn't provide background becomes a "puzzle" for reviewers, they will need to make assumptions in order to uncover the reasons and intent of the author, which can eventually be mistaken and lead to unwanted outcomes. This ends up generating delays and overhead for the reviewers to either seek further clarification from the author or to do research on their own. At very minimum, a pull request description should answer the questions "What?", "Why?" and "How?". Simply writing "Bug Fix " will never be an acceptable description.

#### Is Long
A long pull request increases reviewing complexity; small atomic changes help reviewers to wrap their head around the change quickly rather than having to deal with a conundrum of changes spread across multiple files requiring jumping from one plate to another in order to trace the execution flow. When smaller pull requests are not technically feasible, multiple semantic commits can help get a hold of the components and progression of the development. Since commits can always be squashed before merging if necessary, there is no need to cram everything into a single commit.

#### Addresses more than one concern at a time
A pull request that combines unrelated changes pollute the repository's history and unnecessarily complicates rolling back to previous versions during incidents and outages.

#### Doesn't include the correct reviewers
If an author asks for someone's review who either is not familiar with the codebase nor is proficient with the language or technology, the review is worthless.


#### Lowers test coverage
A pull request that doesn't include Unit or Functional tests is a bad pull request. There are a  very few exceptional cases where adding tests may not be required but authors should have a very good reason to do so.

#### Squashed change requests into the initial commits
When an author blends both the initial changes with the reviewer's "change requests" before the review is finished, it forces a responsible reviewer to go through every single line of code more than once in order to uncover the latest changes.


### The cost of a Great Pull Request

#### Upfront Investments
Configuring a Pull Request template per repository is a one-time investment that will help maintain buy-in on to the initiative, if your team is using Github or Gitlab it shouldn't take you more than 3 minutes.

#### Per Pull Request Investments
Depending on the nature of the change, the author may need to devote from  5 to 10 extra minutes to think and fill out the pull request template. 

### Getting buy-in and enforcement
Now that we are convinced that Great Pull requests are the one thing any team of any size can start doing today with a negligible investment and great returns, its time to address the hard part, getting everybody on board into producing Great Pull Requests and making sure the bar does not go down again.

Starting with implementation, a couple of options could be to have management make it a formal quality requirement, or you could get the people to adopt the practice on their own. I would suggest going for both. At the end of the day, you will be asking people to modify their habits, and we all know how much people like that.