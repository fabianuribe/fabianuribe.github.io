---
layout: post
title: "So you want to migrate a large MySQL database ..."
date: 2013-04-01 17:45:12
categories: en codeblog
---

You found yourself again working late on a Sunday and this time you have to move that giant MySQL database to another server and the first thing you noticed is that phpMyAdmin won't be able to handle such a huge import, Classic.

Well then Google no more, we are going to solve this so fast you will be back in your bed before your neighbor finishes brushing his ridiculous white teeth. Heads up for all you graphic-interface-fans we are doing this "the old school way", like when you only saw a cursor flashing on your black screen, so if you are not used to work inside the command line and you are like:

<div class="quote">
"Oh man... I don't know, that dark screen scares me, everytime I open it something goes wrong, I still get goose bumps when someone mentions it and later I have nightmares about it. My therapist told me to stay away from it."
<br>
<div class="quote-author">You, being a chicken.</div>
</div>

Do not worry, I will walk you through each of the steps and when we are done you can call yourself lord and master of "the matrix".


First things first, backup and upload.
--------------------------------------
I'm going to assume that you are reading this because your database size is, well... BIG, and you would like to move it somewhere away from the current machine, so this is a great time to introduce you to [gzip][gzip]. He is one of those fellows everybody loves, you know the kind you see at every single party buying drinks for everyone. And the good thing about gzip besides his partying abilities, is that he can compress that outrageous multi-gigabyte size database into a gentle and manageable small sized file for free.



<div class="green-box">
<strong>Example :</strong> You can gzip a 1.2 GB database into a 70 MB file. Sweet.
</div>

Fire up the command line on your server and enter the following command to dump your database and compress it at the same time.

{% highlight bash %}
mysqldump -u [USER] -p [DATABASE_NAME] | gzip > [/PATH_TO_FILE/FILE_NAME].sql.gz
{% endhighlight %}


When your backup is done, you can navigate to the folder containing your backup and look at the actual size of your backup file with this two lines :

{% highlight bash %}
cd [/PATH_TO_FILE/]
ls -l -h
{% endhighlight %}


Now you that know the size of your backup you can choose the best way to migrate that file to the new server, for most of the cases you will need to upload the file via the Internet, and there are plenty of ways to do that. Using an FTP client is one of the most common and there quite a few clients out there, so go ahead and use your favorite one, I'm going to show you how you can do it using a command line FTP client named [NcFTP][ncftp]. It's available for almost any operative system so most of you won't have a problem installing or running it.

Once you have installed the NcFTP client on your server, fire it up by typing : ncftp inside the command line, this will bring up the NcFTP prompt, connect to your new server with this command:

{% highlight bash %}
open -u [USER_NAME] [IP_ADDRESS]
{% endhighlight %}

Then navigate to the location where you wish to store your backup and upload your backup file using the following two commands :

{% highlight bash %}
cd [/PATH_TO_FILE_ON_NEW_SERVER/]
put [/PATH_TO_FILE/FILE_NAME].sql.gz
{% endhighlight %}


Creating the database
-----------------------

Now that your backup is up and ready on your new server, its time to create the database. Depending on your new server's configuration you can use a graphical interface to do it such as phpMyAdmin or cPanel but since you are already here lets do it using the command line, fire up the MySQL prompt with the following command:

{% highlight bash %}
mysql -u [USER] -p
{% endhighlight %}

Then execute the following command to create a database .

{% highlight bash %}
CREATE DATABASE [DATABASE_NAME];
{% endhighlight %}



Importing the database
-----------------------

This wasn't so hard, was it ? We have arrived to last step, its time to make the import. log in to your new server and execute the following command to unzip the backup file.

{% highlight bash %}
gzip -d [/PATH_TO_FILE_ON_NEW_SERVER/FILE_NAME].sql.gz
{% endhighlight %}


Then its time to tell MySQL to make the import with this command :

{% highlight bash %}
mysql -u [USER] [DATABASE_NAME] < [/PATH_TO_FILE_ON_NEW_SERVER/FILE_NAME].sql
{% endhighlight %}

And thats pretty much it! you have successfully migrated your database, you learned some cool command line tricks and your life is better than ever, of course you can always use the comments section below if you have any questions.

[gzip]: http://www.gzip.org/
[ncftp]: http://www.ncftp.com/
