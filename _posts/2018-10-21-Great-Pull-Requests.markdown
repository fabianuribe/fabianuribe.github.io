---
layout: post
title: "Great Pull Requests"
date: 2018-10-21 16:00:00
description: "The key to efficient and productive engineering teams."
category: blog
tags: [Productivity, Git]
---

Using Pull Requests to ship code is nowadays the standard and best practice for developing software at a team or in an open source setting. Contributors "request" their changes to be approved by one or more members of the team in order to ensure the healthy evolution of a codebase.

However, producing the right kind of  Pull Requests can be essential for your team to stay efficient and productive.

Let's split into two groups the usual activities a Software Engineer spends their working time as an *individual contributor* at the average Tech Company/Startup:

> - *Coding*

> *V.S.*

>    - *Attending meetings*  
>    - *Replying to email and instant messages*  
>    - *Reviewing Pull Requests*  
>    - *Mentoring/Helping a teammate*  
>    - *Dealing with a broken pipeline, bad builds or incidents*  
>   - *Keeping up new developments on the field*  

It might not be all that obvious but, you and your team could spend a whole less time on the second group of activities by simply producing better Pull Requests.

### What is a Great Pull Request?
You know it when you see it; It is a good looking set of set changes nicely wrapped with all the information you need to do your thing;  the incoming change might not be simple, yet is very simple to review; it is clear, beautiful and makes you warm and fuzzy inside.

### What's so great about Great Pull Requests

#### Simpler and quicker to review
On a great pull request, reviewers don’t waste time figuring out the context, rationale, and implications of an incoming change or feature. While context-setting might not be a big issue on a small team, it makes an absolute difference in medium and large teams, where it is impossible keep track of the details of what everybody else is currently working on.

#### Share and impulse knowledge growth
Whenever introducing design patterns, technologies, techniques or best practices, a Great Pull Request is better than your average blog post. The reviewers get a very practical and contextual case study for associating abstract concepts or techniques; not only the reviewer's knowledge is pushed for growth, but the author is also compelled to research further in order to support and justify the strategy and consequences of their proposed changes.

#### Quality drivers
They boost or maintain the quality of a codebase. Thoughtful changes become contagious amongst the contributors; they set the quality bar for reviewers and contributors; great codebase quality directly correlates to fewer incidents and outages, which translates productive and happier teams.

#### Become documentation and a runbook for debugging
They help new team members commence and understand new codebases;  They simplify and expedite getting production issues under control, since they become snapshots of the entire story in a single place, time is not wasted on tracing and investigating root causes, how things work or stabilization strategies.

### The dangers of bad pull requests

#### Timesink
Bad pull requests are less likely to be approved on a single review round, as reviewers request clarifications, they increase the chances of falling into never-ending rounds of modification requests or even end up getting closed, wasting everyone's time.

#### Slow down product development
Bad pull requests will be inevitably procrastinated upon, they become "hot potatoes" that team members will put off reviewing until someone has to "take one for the team".

#### Bad for the author's career
Bad pull requests damage the reputation of their authors, they will diminish the team's confidence on their qualifications and raise concerns amongst the management, making it harder on themselves to progress on their career.

### Anatomy of a Great Pull Request
- Great code quality
- Context
    - Thoughtful Title
    - Background, Goal and Strategy
    - Knowledge transfer *
    - Screenshots / GIFs / Preview links *
    - Perfromance/impact analysis
    - Tests summary
    - Pending Tasks / Next steps *
- Appropriate reviewers  

 **optional depending on the type of change*

### Do's and Don'ts of Pull Requests

#### Do: Thoroughly review your code before asking someone else to review it
It is unlikely anyone will grasp the content and extent of proposed changes better than the authors themselves, it is their responsibility to both consciously and critically review themselves so that all the "rough edges" and "human errors" are polished before requesting others to spend their time on it.

#### Do: Provide context
A pull request that doesn't provide background becomes a "puzzle" for reviewers; they will need to make assumptions in order to uncover the reasons and intent of the author, which can eventually be mistaken and lead to unwanted outcomes. This ends up generating delays and overhead for the reviewers to either seek further clarifications from the author or to do research on their own. At very minimum, a pull request description should answer the questions "What?", "Why?" and "How?";  Writing "bug fix" is never an acceptable description.

#### Do: Keep it short
A long pull request increases reviewing complexity; small atomic changes help reviewers to wrap their head around the change quickly rather than having to deal with a conundrum of changes spread across multiple files. When smaller pull requests are not technically feasible, multiple semantic commits can help get a hold of the components and progression of the development. Since commits can always be squashed before merging if necessary, there is no need to cram everything into a single commit.

#### Don't: Address more than one concern at a time
A pull request that combines unrelated changes pollute the repository's history and unnecessarily complicates rolling back to previous versions during incidents and outages.

#### Don't: Include the wrong reviewers
If an author asks for someone's review who either is not familiar with the codebase nor is proficient with the language or technology, the review will only become overhead without value.

#### Don't: Lower the test coverage
A pull request that doesn't include Unit or Functional tests is a bad pull request. There are a  very few exceptional cases where adding tests may not be required but authors should have a very good reason to do so.

### The cost of a Great Pull Request

#### Upfront investments
Configuring a Pull Request template per repository is a one-time investment that will help maintain buy-in on to the initiative, if your team is using Github or Gitlab it shouldn't take you more than 3 minutes.

#### Per Pull Request investments
Depending on the nature of the change, the author may need to devote from  5 to 10 extra minutes to think and fill out the pull request template. 

### Conclusion
If *you* or *your* team are struggling getting things done, maintaining code quality or merely feeling there are just not enough hours in a day; look into your Pull Requests. Great Pull Requests are the one thing any team of any size can start doing today with minimal investment and great returns.