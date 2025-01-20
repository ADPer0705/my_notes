# Types of Machine Learning Systems

There are so many machine learning systems that it is useful to classify them in broad categories, based on the following criteria 
- Whether or not they are trained with human supervision 
	- supervised, unsupervised, semi-supervised, and reinforcement learning
- Whether or not they can learn incrementally on the fly 
	- online vs batch learning
- Whether they work by simply comparing new data points to know data points, or instead by detecting patterns in the training data and building a predictive model, much like scientists do 
	- instance-based vs model-based learning

These criteria are no exclusive; you can combine them in any way you like 

## Supervised / Unsupervised Learning
Machine learning systems can be classified according to the amount and type of supervision they get during training, mainly into four categories : 
1. Supervised Learning 
2. Unsupervised Learning 
3. Semi-supervised Learning 
4. Reinforcement Learning

#### Supervised Learning 

> [!NOTE]
> Supervised learning uses labeled inputs (meaning the input has a corresponding output label) to train models and learn outputs. 

- Here the training set you feed to the algorithm includes the desired solutions, called *labels*. 
- A typical supervised learning task is *classification*.
	- e.g. spam filter is trained with many example emails along with their *class* (spam or ham), and it must learn how to classify new emails
- Another typical task is to predict a *target* numeric value, such as the price of a car, given a set of features (mileage, age, brand, etcl.) called *predictors*
	- This sort of task is called *regression*
	- To train the system, you need to give it many examples of cars, including both their predictors and their labels (i.e. their prices)


> [!NOTE] 
> In machine learning an *attribute* is a data type (e.g. "mileage"), while a *feature* has several meanings, depending on the context, but generally means an attribute plus its value (e.g. "mileage = 15,000"). Many people use the words attribute and feature interchangeably

Note that some regression models can be used for classification as well, e.g. logistic regression is commonly used for classification, as it can output a value that corresponds to the probability of belonging to a given call (e.g. 20% chance of being spam)

![[Screenshot from 2024-09-14 17-20-27.png]]

here are some of the most important supervised learning algorithms :
- k-Nearest Neighbours
- Linear Regression 
- Logistic Regression
- Support Vector Machines (SVMs)
- Decision Trees and Random Forests
- Neural networks

##### Classification
predict discrete classes
- Binary Classification 
- Multi-Class classification

##### Regression
predict continuous values

#### Unsupervised Learning 
In unsupervised learning, as you might guess, the training data is unlabeled. The system tries to learn without a teacher

Here are some of the most important unsupervised learning algorithms
- Clustering  
	- K-Means 
	- DBSCAN 
	- Hierarchical Cluster Analysis (HCA) 
- Anomaly detection and novelty detection 
	- One-class SVM 
	- Isolation Forest 
- Visualization and dimensionality reduction 
	- Principal Component Analysis (PCA) 
	- Kernel PCA 
	- Locally Linear Embedding (LLE) 
	- t-Distributed Stochastic Neighbor Embedding (t-SNE) 
- Association rule learning 
	- Apriori 
	- Eclat

for example, say you have a lot of data about your blog's visitors. 
- You may want to run a *clustering* algorithms to try to detect groups of similar visitors
	- At no point do you tell the algorithms which group a visitor belongs to, it finds those connection without any help
		- For example, it might notice that 40% of your visitors are males who love comic books and generally read your blog in the evening, while 20% are young sci-fi lovers who visit during the weekends.
	- If you use a hierarchical clustering algorithm
		- it may also subdivide each group into smaller groups. This may help you target your posts for each group

![[Screenshot from 2024-09-15 23-32-59.png]]

Visualization algorithms are also good examples of unsupervised learning algorithms 
- You feed them a lot of complex and unlabeled data, and they output a 2D or 3D representation of your data that can easily by plotted 
- These algorithms try to preserve as much structure as they can 
	- e.g. trying to keep separate clusters in the input space from overlapping in the visualization 
	so that you can understand how the data is organized and perhaps identify unsuspected patterns 

![[Screenshot from 2024-09-15 23-39-50.png]]

A related task is *dimensionality reduction*, in which the goal is to simplify the data without losing too much information
- One way to do this is to merge several correlated features into one
	- for example, a car's mileage may be strongly correlated with its age, so the dimensionality reductions algorithms will merge them into one feature that represents the car's wear and tear 
	- This is called *feature extraction*


> [!NOTE] 
> It is often a good idea to try to reduce the dimensions of your training data using a dimensionality reduction algorithm before you feed it to another Machine Learning algorithms (such as a supervised learning algorithm). It will run much faster, the data will take up less disk and memory space, and in some cases it may also perform better

another important unsupervised task is *anomaly detection* 
- e.g. detecting unusual credit card transactions to prevent fraud, catching manufacturing defects, or automatically removing outliers from a dataset before feeding it to another learning algorithm 
- The system is shown mostly normal instances during training, so it learns to recognize them; then, when it sees a new instance, it can tell whether it looks like a normal one or whether it is likely an anomaly

![[Screenshot from 2024-09-16 16-49-25.png]]

A very similar task is *novelty detection*
- it aims to detect new instances that look different from all instances in the training set
- This requires having a very clean data set, devoid of any instances that you would like the algorithm to detect

For example, if you have thousands of pictures of dogs, and 1% of these pictures represent Chihuahuas, then a novelty detection algorithm should not treat new pictures of Chihuahuas as novelties. On the other hand, anomaly detection algorithms may consider these dogs as so rare and so different from other dogs that they would likely classify them as anomalies

Finally, another common unsupervised task is *association rule learning*, in which the goal is to dig into large amounts of data and discover interesting relations between attributes

#### Semisupervised Learning
Since labeling of data is usually time-consuming and costly, you will often have plenty of unlabeled instances and a few labeled instances. Algorithms dealing with such partially labeled data is know as semisupervised learning

![[Screenshot from 2024-09-16 16-57-14.png]]

Some photo-hosting services, such as Google Photos, are good examples of this. Once you upload all your family photos to the service, it automatically recognizes that the same person A shows up in photos 1, 5, and 11, while another person B shows up in photos 2, 5, and 7. This is the unsupervised part of the algorithm (clustering). Now all the system needs is for you to tell it who these people are. Just add one label per person and it is able to name everyone in every photo, which is useful for searching photos

Most semisupervised learning algorithms are combination of unsupervised and supervised algorithms
- for e.g., *deep belief networks (DBNs)* are based on unsupervised components called *restricted Boltzmann machines (RBMs)* stacked on top of one another. RBMs are trained sequentially in an unsupervised manner, and then the whole system in fine-tuned using supervised techniques

#### Reinforcement Learning
- The learning system, called an *agent* in this context, can observe the environment, select and perform actions, and get *reward* in return (or *penalties*) in the form of negative reward
- It must learn by itself what is the best strategy, called a *policy*, to get the most reward over time
- A policy defines what action the agent should choose when it is in a given situation 

![[Screenshot from 2024-09-17 14-59-16.png]]

e.g. 
- many robots implement reinforcement learning algorithms to learn how to walk
- DeepMind’s AlphaGo program is also a good example of Reinforcement Learning: 
	- it made the headlines in May 2017 when it beat the world champion Ke Jie at the game of Go. 
	- It learned its winning policy by analyzing millions of games, and then playing many games against itself. 
	- Note that learning was turned off during the games against the champion; AlphaGo was just applying the policy it had learned

## Batch and Online Learning
Whether or not the system can learn incrementally from a stream of incoming data

#### Batch Learning
- The system is incapable of learning incrementally
- must be trained using all available data
- This will generally take up a lot of time and resources and is hence typically done offline
	- First the system is trained, and then it is launched into production and runs without learning anymore
	- This is called *offline learning*
- If the batch system is to be trained to work on new data, a new version of the system is to be trained on the whole set of data, not just the new part, and then the older system is to be replaced
- Fortunately, the whole process of training and evaluating, and launching a machine learning system can be automated fairly easily
	- simple update the data and train a new system from scratch as often as needed 
- This solution is simple but training a new system can take up a lot of time
	- training a new system can take hours and hence is only done either daily or weekly
- also training the model again and again would cost a lot if the dataset it huge
- It also requires a lot a resources 
- due to these resources, time and cost constraints it may even be impossible to use a batch system for huge datasets

#### Online Learning
- In online learning, you train the system incrementally by feeding in data instances sequentially
	- either individually or 
	- in small groups called *mini-batches*
- Each learning step is fast and cheap, so the system can learn about new data on the fly

![[Screenshot from 2024-09-17 15-21-13.png]]

- great for systems that receive data as a continuous flow (e.g. stock prices) and need to adapt to change rapidly or autonomously 
- also a good options for systems with limited computing resources
	- once the online learning system has learned about new data instance, it does not need them anymore, so you can discard them, unless you want to be able to roll back to a previous state and "replay the data". This can *save a huge amount a space*
- can also be used to train systems on huge datasets that cannot fit in one machine's main memory (this is called [out-of-core learning](obsidian://open?vault=NOTES&file=computerScience%2FmachineLearning%2FScalability_and_Performance%2FoutOfCore_Learning)) 
	- The algorithm loads a part of the data, runs a training step on the data, and repeats the process until it has run on all of the data

> [!NOTE]
> Out-of-core learning is usually done offline (i.e. not on the live system), so *online learning* can be a confusing name. Think of it as **incremental Learning**

One important parameter of online learning systems is how fast they should adapt to changing data
- This is called *learning rate*
- If you set a high leaning rate, then your system will rapidly adapt to new data, but it will also tend to quickly forget the old data 
	- you don't want spam filter to flag only the latest kinds of spam it was shown
- Conversely, if you set a low learning rate, the system will have more inertia; that is, it will learn more slowly, but it will also be less sensitive to noise in the new data or to sequence of non-representative data points (outliers)

![[Screenshot from 2024-09-22 14-42-56.png]]

A big challenge for online learning is that if bad data is fed to the system, the system's performance will gradually decline
	- e.g. someone spamming a search engine to try to rank high in search results 
- To reduce this risk you need to monitor your system closely and promptly switch learning off (and preferably return to previous working state) if you detect a drop in performance.
- You may also want to monitor the input data and react to abnormal data (e.g. using an anomaly detection algorithm)

## Instance-Based Versus Model-Based Learning

> [!NOTE]
> how machine learning systems *generalize*

Most machine learning tasks are about making predictions.
- given a number of training examples, the system needs to be able to make good predictions for (generalize to) examples it has never seen before

There are two main approaches to generalization 
1. instance-based learning
2. model-based learning

#### Instance-Based Learning
Possible the most trivial form of learning is simply to learn by heart
	- If you were to create a spam filter this way, it would just flag all emails that are identical to emails that have already been flagged by users—not the worst solution, but certainly not the best

Instead of just flagging emails that are identical to known spam emails, your spam filter could be programmed to also flag emails that are very similar to known spam emails
- This requires a *measure of similarity* between two emails
	- e.g. counting the number of words they have in common. An email can be flagged spam if it has too many words similar to a known spam email

This is called instance-based learning
- The system learns the examples by heart, then generalize to new cases by using a similarity measure to compare them to the learned examples

![[Screenshot from 2024-09-22 14-55-39.png]]

#### Model-Based Learning
Another way to generalize from a set of examples is to build a model of these examples and then use that model to make predictions. This is called model-based learning

![[Screenshot from 2024-09-22 14-58-34.png]]

For example, suppose you want to know if money makes people happy, so you down‐ load the Better Life Index data from the OECD’s website and stats about gross domes‐ tic product (GDP) per capita from the IMF’s website. Then you join the tables and sort by GDP per capita. Table 1-1 shows an excerpt of what you get.

![[Screenshot from 2024-09-22 15-00-47.png]]


There does seem to be a trend here! Although the data is noisy (i.e., partly random), it looks like life satisfaction goes up more or less linearly as the country’s GDP per capita increases. So you decide to model life satisfaction as a linear function of GDP per capita. This step is called model selection: you selected a linear model of life satisfaction with just one attribute, GDP per capita (Equation 1-1). 

Equation 1-1. A simple linear model 

$$
\text{life\_satisfaction} = \theta_0 + \theta_1 \times \text{GDP\_per\_capita}
$$
The model has two *model parameters* $\theta_0 \space and \space \theta_1$. By tweaking these parameters, you can make your model represent any linear function, as shown 

![[Screenshot from 2024-09-22 15-06-20.png]]

To tweaking the model parameters to gain maximum performance, we need to specify a *performance measure*
- You can either define a *utility function* (or *fitness function*) that measures how good your model is, or 
- you can define a *cost function* that measures the distance between the linear model's predictions and the training examples; the objective being to minimize the distance

For example, say you want to know how happy Cypriots are, and the OECD data does not have the answer. Fortunately, you can use your model to make a good prediction: you look up Cyprus’s GDP per capita, find $\$22,587$, and then apply your model and find that life satisfaction is likely to be somewhere around $4.85 + 22,587 × 4.91 × 10-5 = 5.96$. If you had used an instance-based learning algorithm instead, you would have found that Slovenia has the closest GDP per capita to that of Cyprus ($20,732), and since the OECD data tells us that Slovenians’ life satisfaction is 5.7, you would have predicted a life satisfaction of 5.7 for Cyprus. If you zoom out a bit and look at the two next-closest countries, you will find Portugal and Spain with life satisfactions of 5.1 and 6.5, respectively. Averaging these three values, you get 5.77, which is pretty close to your model-based pre‐ diction. This simple algorithm is called k-Nearest Neighbors regression (in this example, k = 3).

