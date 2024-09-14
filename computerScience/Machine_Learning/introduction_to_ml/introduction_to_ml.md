**Machine Learning** is a subdomain of computer science that *focuses on algorithms* which help a computer *learn from data without explicit programming*

- AI vs ML vs DS
	- *Artificial Intelligence* is an area of computer science, where the goal is to enable computers and machines to perform human-like tasks and simulate human behavior
	- *Machine Learning* is a subset of AI that tries to solve a specific problem and make predictions using data
	- *Data Science* is a field that attempts to find patterns and draw insights form data (might use ML !)
	ALL fields may overlap !
	ALL of them might use ML !

---

following are some of the python frameworks used for machine learning : 
- *Scikit-Learn*
	- very easy to use, yet it implements many machine learning algorithms efficiently 
	- Created by David Cournapeau in 2007 and is now lead by a team of researchers at the French Institute for Research in Computer Science and Automation (Inria)
- *TensorFlow*
	- a more complex library for distributed numerical computation 
	- It makes possible to train and run very large neural networks efficiently by distributing the computations across potentially hundreds of multi-GPU servers 
	- TF was created by Google and supports many of its large-scale Machine Learning applications
	- It was open sourced in November 2015, and version 2.0 was released in September 2019
- *Keras*
	- high-level deep learning API that makes it very simple to train and run neural networks
	- It can run on top of either TensorFlow, Theano, or Microsoft Cognitive Toolkit (formerly CNTK)
	- TensorFlow comes with its own implementation of this API, called *tf.keras*, which provides support for some advanced TensorFlow features

---

# What is Machine Learning ??
Machine learning is the science (and art) or programming computers so they can learn from data

here's a slightly more general definition : 

> [!NOTE] 
> field of study that gives computers the ability to learn without being explicitly programmed 
>   -- Arthur Samuel, 1959

And a more engineering oriented one 

> [!NOTE] 
> A computer program is said to learn experience E with respect to task T and some performance measure P, is its performance T, as measured by P, improves with experience E
>   -- Top Mitchell, 1997

- The examples that the system uses to learn are called *training sets*
- Each training example is called a *training instance* (or sample)

Consider the example of filtering spam emails : 
- task T is to flag spam for new emails 
- The experience E is the training data, and the 
- performance P need to be defined, for example, you can use the ratio of correctly classified emails
	- This particular performance measure is called *accuracy*, and is often used in classification tasks
If you download a copy of wikipedia, then you computer suddenly has a lot of more data, but it isn't better at doing anything upon downloading, hence it is not considered as machine learning



how would hard-coding a spam detector or any similar program look like : 

![[Screenshot from 2024-09-13 17-43-17.png]]

since most problems are difficult, the program is likely to become a complex list of rules --- pretty hard to maintain

In contrast, a spam filter based on machine learning techniques automatically learns which words and phrases are good predictors of spam by detecting unusually frequent patterns of words in the spam examples compared to the ham examples. The program is much shorter, easier to maintain, and most likely more accurate

what if the spammers notice "4U" being flagged and starts using "FOR YOU" instead. In the traditional program it would need to be updated, but a machine learning model it would automatically be detected that the words "FOR YOU" are being used excessively in the emails reported as spam by the users.

![[Screenshot from 2024-09-13 17-49-10.png]]


Another area where Machine Learning shines is for problems that either are too complex for traditional approaches or have no known algorithm. For example, consider speech recognition. Say you want to start simple and write a program capable of distinguishing the words “one” and “two.” You might notice that the word “two” starts with a high-pitch sound (“T”), so you could hardcode an algorithm that measures high-pitch sound intensity and use that to distinguish ones and twos—but obviously this technique will not scale to thousands of words spoken by millions of very different people in noisy environments and in dozens of languages. The best solution (at least today) is to write an algorithm that learns by itself, given many example recordings for each word.

Finally, machine learning algorithms can help humans learn. ML algorithms can be inspected to see what they have learned (although for some algorithms this can be tricky). Sometimes this will reveal unsuspected correlations or new trends, and thereby lead to a better understanding of the problem. Applying ML techniques to dig into large amounts of data can help discover patterns that were not immediately apparent. This is called *data mining*


![[Screenshot from 2024-09-13 17-54-56.png]]

To summarize machine learning is great for : 
- Problems for which existing solutions require a lot of fine-tuning or long lists of rules: one Machine Learning algorithm can often simplify code and perform better than the traditional approach.
- Complex problems for which using a traditional approach yields no good solution: the best Machine Learning techniques can perhaps find a solution.
- Fluctuating environments: a Machine Learning system can adapt to new data. 
- Getting insights about complex problems and large amounts of data