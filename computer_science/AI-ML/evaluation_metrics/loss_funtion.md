# L1 Loss
aka **Mean Absolute Error (MAE)**

> [!NOTE]
> it is a loss function used to measure the difference between predicted values and actual values in regression problems

$$
L_1 \text{ Loss} = \frac{1}{n} \sum_{i=1}^n \lvert y_i - \hat{y}_i \rvert
$$
Where
- $y_i$ : True value for the $i$-th sample
- $\hat{y}_i$ : Predicted value for the $i$-th sample
- $n$ : Total number of samples

### Properties
- Absolute Differences
	- L1 Loss penalizes each error linearly with its magnitude, regardless of whether it's positive or negative
- Outlier Tolerance
	- It is more robust to outliers compared to L2 loss (Mean Squared Error) because the penalty for large errors grows linearly rather than quadratically
- Non-Smooth Gradient
	- The gradient of L1 loss is not smooth at zero, which can make optimization slightly more challenging in some cases

### Advantages
- Robustness to Outliers
	- Because it does not square the error, extreme values (outliers) have less influence on the model
- Interpretability
	- The loss directly corresponds to the average absolute deviation, making it easy to understand

### Disadvantages
- Optimization Difficulty
	- The absolute value function is not differentiable at zero, which may complicate gradient-based optimization techniques 
- Less Sensitive
	- Compared to L2 loss, L1 loss is less sensitive to small deviation in predictions

### Use Cases
- When the data contains outliers or noise, L1 loss is preferred
- Applications where small deviations don't matter much, but large deviations need to be minimized consistently