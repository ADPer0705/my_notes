**Machine Learning** is a subdomain of computer science that *focuses on algorithms* which help a computer *learn from data without explicit programming*

- AI vs ML vs DS
	- *Artificial Intelligence* is an area of computer science, where the goal is to enable computers and machines to perform human-like tasks and simulate human behavior
	- *Machine Learning* is a subset of AI that tries to solve a specific problem and make predictions using data
	- *Data Science* is a field that attempts to find patterns and draw insights form data (might use ML !)
	ALL fields may overlap !
	ALL of them might use ML !


> [!NOTE] 
> Machine learning builds upon the language of mathematics to express concepts that seem intuitively obvious but that are surprisingly difficult to formalize


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
- *Problems for which existing solutions require a lot of fine-tuning or long lists of rules* 
	- one Machine Learning algorithm can often simplify code and perform better than the traditional approach.
- *Complex problems for which using a traditional approach yields no good solution* 
	- the best Machine Learning techniques can perhaps find a solution.
- *Fluctuating environments* 
	- a Machine Learning system can adapt to new data. 
- *Getting insights about complex problems and large amounts of data*

## Examples of Applications 
- Analyzing images of products on a production line to automatically classify them 
	- This is image classification 
	- Typically performed using convolutional neural networks 
- Detecting tumors in brain scans
	- This is semantic segmentation
	- here each pixel in the image is classified (as we want to determine the exact location and shape of tumor)
	- Typically uses CNNs as well
- Automatically classify news articles
	- This is natural language processing (NLP), more specifically text classification
	- This can be tackled using recurrent neural networks (RNNs), CNNs or Transformers 
- Automatically flagging offensive comments on discussion forums 
	- This is also text classification, using the same NLP tools
- Summarizing long documents automatically
	- This is a branch of NLP called text summarization, again using the same tools
- Creating a chatbot or a personal assistant 
	- This involves many NLP components, including natural language understanding (NLU) and question-answering modules
- Forecasting your company’s revenue next year, based on many performance metrics 
	- This is a regression task (i.e., predicting values) that may be tackled using any regression model, such as a Linear Regression or Polynomial Regression model, a regression SVM, a regression Random Forest, or an artificial neural network. 
	- If you want to take into account sequences of past performance metrics, you may want to use RNNs, CNNs, or Transformers 
- Making your app react to voice commands 
	- This is speech recognition
	- This requires processing audio samples
		- since they are long and complex sequences, they are typically processed using RNNs, CNNs, or Transformers 
- Detecting credit card fraud 
	- This is anomaly detection 
- Segmenting clients based on their purchases so that you can design a different marketing strategy for each segment 
	- This is clustering 
- Representing a complex, high-dimensional dataset in a clear and insightful diagram 
	- This is data visualization
	- often involves dimensionality reduction techniques 
- Recommending a product that a client may be interested in, based on past purchases 
	- This is a recommender system. 
	- One approach is to feed past purchases (and other information about the client) to an artificial neural network and get it to output the most likely next purchase. 
	- This neural net would typically be trained on past sequences of purchases across all clients. 
- Building an intelligent bot for a game 
	- This is often tackled using Reinforcement Learning (RL)
	- It is a branch of Machine Learning that trains agents (such as bots) to pick the actions that will maximize their rewards over time (e.g., a bot may get a reward every time the player loses some life points), within a given environment (such as the game). 
	- The famous AlphaGo program that beat the world champion at the game of Go was built using RL.

---

# Main Challenges of Machine Learning
since the main task is to select a learning algorithm and train it on some data, the two things that can go wrong are "bad algorithm" and "bad data"

#### Insufficient Quantity of Training Data
It takes a lot of data for most machine learning algorithms to work properly.

*The Unreasonable Effectiveness of Data*
- In a famous research paper published in 2001, Microsoft researchers Michele Banko and Eric Brill showed that very different machine learning algorithms, including fairly simple ones, performed almost identically well on a complex problem of natural language disambiguation once they were given enough data
- As the authors put it 
	  "these results suggest that we may want to reconsider the trade-off between spending time and money on algorithm development versus spending it on corpus development"

![[Screenshot from 2024-09-23 17-12-22.png]]

- The idea that data matters more than algorithms for complex problems was further popularized by Peter Norvig et al. in a paper titled “The Unreasonable Effectiveness of Data”, published in 2009.10 It should be noted, however, that small- and mediumsized datasets are still very common, and it is not always easy or cheap to get extra training data—so don’t abandon algorithms just yet

#### Non-representative Training Data

> [!NOTE]
> In order to generalize well, it is crucial that your training data be representative of the new cases you want to generalize to

This is true whether you use instance-based learning or model-based learning

![[Screenshot from 2024-09-23 17-16-45.png]]
- the dotted line is where some of the countries were missing
- the dashed line is the line we get when using the complete representative data set

It is crucial to use a training set that is representative of the cases you want to generalize to. This is often harder than it sounds : 
- If the sample is too small, you will have *sampling noise*
	- i.e. non-representative data as a result of chance
- but even very large samples can be non-representative if the sampling method is flawed 
	- this is called *sampling bias*

#### Poor Quality Data
If your data is full of errors, outliers, and noise, it will make it harder for the system to detect the underlying patterns, so your system is less likely to perform well.

It is often well worth the effort to spend time cleaning up your training data. The truth is most data scientists spend a significant part of their time doing just that.
- If some instances are clearly outliers, it may help to simply discard them or try to fix the errors manually. 
- If some instances are missing a few features (e.g., 5% of your customers did not specify their age), you must decide whether you want to ignore this attribute alto‐ gether, ignore these instances, fill in the missing values (e.g., with the median age), or train one model with the feature and one model without it.

#### Irrelevant Features
Your system will only be capable of learning if the training data contains enough relevant features and not too many irrelevant ones.

A critical part of the success of a machine learning project is coming up with a good set of features to train on. This process if called [feature Engineering](obsidian://open?vault=NOTES&file=computerScience%2FmachineLearning%2Fdata%2Ffeatures).

#### Overfitting the training data
