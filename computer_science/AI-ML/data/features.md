features are *individual measurable properties* or characteristics of the data being analysed

> [!NOTE]
> Variables of Attributes that describe the data

e.g. in a dataset about houses the features might include square footage, number of bedrooms, location, and age of the house

---

# Types of Features
## Numerical Features
- *Quantitative variables* that can be measured
- They can be 
	- continuous 
		  e.g. height, weight, etc 
		or
	- discrete
		  e.g. number of children, etc.

## Categorical Features
- *Qualitative variables* that represent categories 
- They might be 
	- nominal
		  e.g. color, brand
			  - here labeling practices like one-hot encoding are used to avoid ordinality
	- ordinal
		  e.g. rankings
		  e.g. bad, okay, mediocre, good, great
			  - here we can label them 1 - 5, 
			  - here, there is inherent sense of order as in 
				  - good is better than okay
				  - mediocre is closer to good and okay compared to great and bad

Binary Features
- A type of categorical features that has only two possible values
	  yes/no     OR     true/false

#### One-Hot Encoding
it is technique used to *convert categorical variables into a numerical format that machine-learning algorithms can work with*
- particularly useful for representing nominal categorical data where the order of categories does not matter

- one-hot encoding creates binary columns for each category in a categorical variable
- the value if set to 1 if the category is present and 0 if the category is absent


| color | Red | Green | Blue |
| ----- | --- | ----- | ---- |
| Red   | 1   | 0     | 0    |
| Green | 0   | 1     | 0    |
| Blue  | 0   | 0     | 1    |
| Red   | 1   | 0     | 0    |

##### Benefits of One-hot encoding
- Avoids Ordinal Relationship
	- it prevents algorithms from assuming a natural ordering among categories, which is crucial for nominal data
- Compatibility
	- many machine learning algorithms (e.g. linear regression, decision tree) perform better with numerical input

##### Considerations
- *Curse of Dimensionality*
	- one-hot encoding can significantly increase the number of features, especially with high cardinality (many categories)
	- This can lead to overfitting and increased computation time
- *Sparsity*
	- The resulting matrix can be spars (many zeros), which might not be efficient for some algorithms

##### Encoding Multi-label data 
consider the example of movies 

| Movie                   | Action | Adventure | Comedy |
| ----------------------- | ------ | --------- | ------ |
| Guardians of the Galaxy | 1      | 1         | 1      |
| A serious man           | 0      | 0         | 1      |

---

# Feature Engineering
A critical part of the machine learning project is coming up with a good set of features to train on. This process is called *Feature Engineering*, involves the following steps :
- *Feature Selection*
	- Selecting the most useful features to train on among existing features
- *Feature Extraction*
	- combining existing features to produce a more useful one
	- here dimensionality reduction algorithms may help
- Creating new features by gathering new data