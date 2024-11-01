# Dimensionality Reduction
it is a technique used in machine learning and statistics to reduce the number of features (dimensions) in a dataset while retaining as much information as possible.
This can help 
- improve model performance
- reduce overfitting
- make visualization easier

##### Why use Dimensionality Reduction
- In high-dimensional spaces, the amount of data required to achieve reliable statistical analysis grows exponentially
- Noise Reduction
	- Reducing dimensions can help eliminate noise and improve model accuracy
- Visualization
	- it allows for easier visualization of data in 2D or 3D

## Common Techniques
#### Principle Component Analysis (PCA)
PCA transforms the original features into a set of uncorrelated variables (*principle components*) ordered by the amount of variance they capture 

How It Works
1. Standardize the data.
2. Compute the covariance matrix.
3. Calculate the eigenvalues and eigenvectors.
4. Select the top k eigenvectors based on the largest eigenvalues.
5. Project the data onto these k eigenvectors.

#### t-Distributed Stochastic Neighbor Embedding (t-SNE)
t-SNE is a *non-linear technique* particularly *well-suited for visualizing high-dimensional data in lower dimensions*.

How It Works
- It converts the affinities of data points to probabilities, capturing local structures in the data, and then minimizes the divergence between the high-dimensional and low-dimensional distributions.

#### Linear Discriminant Analysis (LDA)
LDA is used primarily for classification problems, maximizing the ratio of between-class variance to within-class variance.

How It Works
- It finds a linear combination of features that separates two or more classes.

#### Autoencoders
Autoencoders are neural networks designed to learn efficient codings of data, typically in an unsupervised manner.

How It Works
- The network consists of an encoder that compresses the input into a lower-dimensional representation and a decoder that reconstructs the original input from this representation.

---

## Considerations
- *Choosing the Right Technique* 
	- The choice depends on the nature of the data and the problem (e.g., linear vs. non-linear relationships).
- *Loss of Information* 
	- Reducing dimensions may lead to a loss of important information, so it’s crucial to evaluate the performance of your model after applying dimensionality reduction.

---

### Applications

- **Preprocessing**: Before feeding data into models to reduce complexity.
- **Data Visualization**: To visualize clusters or patterns in data.
- **Feature Selection**: To improve model interpretability and performance