---
layout: post
title: "Your day doesn't need more hours, you need Great Pull Requests"
date: 2018-10-21 16:00:00
description: "The one thing every engineering team of any size can start doing today with minimal investment and great productivity returns."
category: blog
tags: [Productivity, Git]
---

The use of Pull Requests has been adopted as the standard for developing software in a team or open source setting. Contributors "request" a set of changes to be approved for inclusion by one or more members of the team in order to uphold the healthy evolution of a codebase.

However, composing the right kind of Pull Requests is essential for your team to be productive and efficient.

Let's boldly split into two groups the activities on which most of the Software Engineers spend their workday as *individual contributors* at the average Tech Company or Startup:

<style>
    .diagram ul {
        display: block;
        font-style: italic;
        margin: 20px 0;
    }
    .group-heading {
        font-weight: bold;
        display: block;
    }

    @media (min-width: 663px) {
        .diagram {
            text-align: center;
            margin-bottom: 40px;
            margin-top: 80px;
        }
        .diagram ul {
            position: relative;
            list-style: none;
            border-radius: 50%;
            display: inline-block;
        }
        .diagram ul.group-a {
            background: #333;
            color: #fff;
            padding: 86px 77px;
            margin-top: 95px;
            margin-right: -14px;
            vertical-align: top;
        }
        .diagram ul.group-b {
            background: rgba(77, 208, 225, .9);
            padding: 48px 22px;
            margin: 0;
            line-height: 52px;
        }
        .group-heading {
            position: absolute;
            top: -50px;
            color: #333;
            width: 100%;
            left: 0;
        }
    }
</style>
<div class="diagram">
    <ul class="group-a">
        <li class="group-heading">Group a.</li>
        <li>Coding</li>
    </ul>
    <ul class="group-b">
        <li class="group-heading">Group b.</li>
        <li>Attending meetings.</li>
        <li>Mentoring or helping a teammate.</li>
        <li>Replying to email and instant messages.</li>
        <li>Dealing with a broken pipeline or incidents.</li>
        <li>Keeping up with new trends on the field.</li>
        <li>Reviewing Pull Requests.</li>
    </ul>
</div>

It may not seem so natural but, your team could spend a lot less time on the second group of activities by simply producing better Pull Requests.

### What is a Great Pull Request?
You know it when you see it; a good looking set of changes, nicely wrapped, with all the information you need to do your thing. The incoming change might not be simple, yet it is very simple to review: clear, beautiful, and it makes you warm and fuzzy inside

### What's so special about Great Pull Requests

#### Simpler and quicker to review
On a great Pull Request, reviewers don’t waste time figuring out the context, rationale, and implications of an incoming change or feature. While context-setting might not be a big issue on a small team, it makes an absolute difference in medium and large teams, where it is impossible keep track of the details of what everybody else is currently working on.

#### Share and push knowledge growth
Whenever introducing design patterns, technologies, techniques or best practices, a Great Pull Request is better than your average blog post. The reviewers get a very practical and contextual case study for associating abstract concepts or techniques; not only is the reviewer pushed for growth, but the author is also compelled to research further in order to support and justify the strategy and consequences of their proposed changes.

#### Quality drivers
They boost or maintain the quality of a codebase. Thoughtful changes become contagious amongst the contributors; they set the bar for reviewers and contributors. Great codebase quality directly correlates to fewer incidents and outages, which translates productive and happier teams.

#### Introduce documentation and a runbook for debugging
They help new team members commence and understand new codebases;  They simplify and expedite getting production issues under control, since they become snapshots of the entire story in a single place, time is not wasted on tracing and investigating root causes, how things work or stabilization strategies.

### Dangers of bad Pull Requests

#### Time sinks
Bad Pull Requests are less likely to be approved on a single review round, as reviewers request clarifications, they increase the chances of falling into never-ending rounds of modification requests or even end up getting closed, wasting everyone's time.

#### Slow down product development
Bad Pull Requests will be inevitably procrastinated upon, they become "hot potatoes" that team members will put off reviewing until someone has to "take one for the team".

#### Bad for the author's career
Bad Pull Requests damage the reputation of their authors, they will diminish the team's confidence in their qualifications and raise concerns amongst the management, making it harder for them to progress in their career.

### Anatomy of a Great Pull Request
- Great code quality
- Description
    - Thoughtful title
    - Background, goal and strategy
    - Knowledge transfer *
    - Screenshots / GIFs / Preview links *
    - Performance impact analysis
    - Tests coverage
    - Pending tasks or next steps *
- Appropriate reviewers  

 **optional depending on the type of change*

### Do's and Don'ts of Pull Requests

#### Do: Thoroughly review your code before asking someone else to review it
It is unlikely anyone will grasp the content and extent of proposed changes better than the authors themselves, it is their responsibility to both consciously and critically review themselves so that all the "rough edges" and "human errors" are polished before requesting others to spend their time on it.

#### Do: Provide context
A Pull Request that doesn't provide background becomes a "puzzle" for reviewers; they will need to make assumptions in order to uncover the reasons and intent of the author, which can eventually be mistaken and lead to unwanted outcomes. This ends up generating delays and overhead for the reviewers to either seek further clarifications from the author or to do research on their own. At very minimum, a Pull Request description should answer the questions "What?", "Why?" and "How?";  Writing "bug fix" is never an acceptable description.

#### Do: Keep it short
A long Pull Request increases reviewing complexity; small atomic changes help reviewers to wrap their head around the change quickly rather than having to deal with a conundrum of changes spread across multiple files. When smaller Pull Requests are not technically feasible, multiple semantic commits can help get a hold of the components and progression of the development. Since commits can always be squashed before merging if necessary, there is no need to cram everything into a single commit.

#### Don't: Address more than one concern at a time
A Pull Request that combines unrelated code changes pollutes the repository's history and unnecessarily complicates rolling back to previous versions during incidents or outages.

#### Don't: Include the wrong reviewers
If an author asks for someone's review who either is not familiar with the codebase nor is proficient with the language or technology, the review will only become overhead without real value.

#### Don't: Lower the test coverage
A Pull Request that doesn't include Unit or Functional tests is a bad Pull Request. There are few cases where adding new tests may not be required, but authors should have a very good rationale behind the decision.

### Cost of a Great Pull Request

#### Up-front investments
Configuring a Pull Request template per repository is a one-time investment that will help your team buy-in to and sustain the initiative. If your team is using Github or Gitlab, it shouldn't take you more than 3 minutes.

#### Per Pull Request investments
Depending on the nature of the change, the author may need to devote from  5 to 10 extra minutes to think and fill out the Pull Request template. 

### Conclusion
If *you* or *your* team are struggling to get things done, maintaining code quality or merely feeling there are just not enough hours in a day; look into your Pull Requests. Great Pull Requests are the one thing any team of any size can start doing today with minimal investment and great returns.