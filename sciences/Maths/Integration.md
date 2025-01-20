# Reduction Formula
#reduction_integrals

### $\text{For }\sin \& \cos$ 

$$
\begin{aligned}
\text{let }I_{n} &= \int \sin^nx \, dx\\
I_{n} &= \int \sin^{n-1}x \cdot \sin x \, dx \\
&\text{On applyng the u$\cdot$v rule we get} \\
I_{n} &= \sin^{n-1}x \cdot (-\cos x) - \int (n-1)\cdot\sin^{n-2}x \cdot (-\cos x)\cdot \cos x \, dx \\
&= -(\sin^{n-1}x\cdot \cos x) + \int  (n-1)\cdot \sin ^{n-2}x \, dx  - (n-1)\int  \sin^n x \, dx \\
n\cdot I_{n} &= -(\sin^{n-1}x\cdot \cos x) + (n-1)I_{n-2}
\end{aligned}
$$

> [!NOTE] Therefore the required reduction formula for $\int \sin^nx \, dx$ is 
> $I_n = \frac{1}{n}[-(\sin^{n-1}x\cdot \cos x) + (n-1)I_{n-2}]$
> $\text{where } I_{n}=\int \sin^nx \, dx$

> [!NOTE] similarly, the required reduction formula for $\int \cos^nx \, dx$ is 
> $I_n = \frac{1}{n}[(\cos^{n-1}x\cdot \sin x) + (n-1)I_{n-2}] \\$
> $\text{where } I_{n}=\int \cos^nx \, dx$

**note :** notice the change in the sign and the respective powers of the first term.

### $\text{For} \left[ \int_{0}^{\frac{\pi}{2}} \sin^{n}x \, dx \right]\; \& \left[ \int_{0}^{\frac{\pi}{2}} \cos^nx \, dx \right]$

$$
\begin{aligned}
\text{let } I_{n} &= \int_{0}^{\frac{\pi}{2}} \sin^nx \, dx \\
I_n &= \frac{1}{n}(-(\sin^{n-1}x\cdot \cos x) + (n-1)I_{n-2}) \\
&\text{applying the limits we get ;}
\end{aligned}
$$

> [!NOTE] The required reduction formula for $\int_{0}^{\frac{\pi}{2}}\sin^{nx \, dx} \& \int_{0}^{\frac{\pi}{2}}\cos^{nx \, dx}$ 
> $$I_{n} = \frac{n-1}{n}\cdot I_{n-2}$$
> where $\int_{0}^{\frac{\pi}{2}}\sin^{n}x \, dx \;\; \text{or} \;\; \int_{0}^{\frac{\pi}{2}}\cos^{n}x \, dx$


Hence the following cases arise from the above equation :

> [!NOTE] **NOTE :** $n \in \left(0, \inf\right]$
> For $n$ being even :
> $\begin{aligned}
> I_{n} &= \frac{n-1}{n}\cdot \frac{n-3}{n-2} \cdot \cdot \cdot \cdot \frac{5}{6}\cdot \frac{3}{4} \cdot \frac{1}{2} \cdot \int_{0}^{\frac{\pi}{2}} 1 \, dx \\
> \;  \\
> I_{n} &= \frac{n-1}{n}\cdot \frac{n-3}{n-2} \cdot \cdot \cdot \cdot \frac{5}{6}\cdot \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2}
> \end{aligned}$
> $
> \; \\
> \; \\
> $
> For $n$ being odd :
> $\begin{aligned}
> I_{n} &= \frac{n-1}{n}\cdot \frac{n-3}{n-2} \cdot \cdot \cdot \cdot \frac{5}{6}\cdot \frac{4}{3} \cdot 2 
> \end{aligned}$
>  


### For $\int \sin^{m}x \cdot \cos^{n}x \, dx$

$$
\begin{aligned}
I_{m,n} &= \int \sin^{m}x \cdot \cos^{n}x \, dx \\
I_{m,n} &= \int \cos^{n-1}x \cdot(\sin^{m}x \cdot \cos x) \, dx \\
\; \\
&\text{furthur applying the $u\cdot v$ rule \& saperating the $I_{mn}$ terms on one side of the equation we get :} \\
\; \\
I_{m,n} &= \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} + \left( \frac{n-1}{m+n} \right) \int \sin^{m}x \cdot \cos^{n-2}x \, dx 
\end{aligned}
$$

Therefore :

> [!NOTE] $I_{m,n} = \int \sin^{m}x \cdot \cos^{n}x \, dx$  
> $$
> \begin{aligned}
> &= \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} + \left( \frac{n-1}{m+n} \right) \int \sin^{m}x \cdot \cos^{n-2}x \, dx \\
> &= \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} + \left( \frac{n-1}{m+n} \right)\cdot I_{m,n-2}
\end{aligned}
$$



Upon applying the limits we get
$$
\begin{aligned}
I_{m,n} &= \int_{0}^{\frac{\pi}{2}} \sin^{m}x \cdot \cos^{n}x \, dx \\
&= \left[ \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} \right]_{0}^{\frac{\pi}{2}} + \left( \frac{n-1}{m+n} \right) \int_{0}^{\frac{\pi}{2}} \sin^{m}x \cdot \cos^{n-2}x \, dx \\
&= \left( \frac{n-1}{m+n} \right)\cdot I_{m,n-2}
\end{aligned}
$$
Therefore 

> [!NOTE] $I_{m,n} = \int_{0}^{\frac{\pi}{2}} \sin^{m}x \cdot \cos^{n}x \, dx$
> $$
> I_{m,n} = \left( \frac{n-1}{m+n} \right)\cdot I_{m,n-2}
$$

**REMARKS :** The reduction formula goes as follows. Start by adding the multiplicative fractional terms and reducing the power of the $\cos$ function. when it reaches 0 or 1, proceed accordingly. Only in the case of 'm' being odd and 'n' being even, the equation ends with a $\frac{\pi}{2}$.

---

# Functions, Elliptical Integrals and Error Functions

## Gamma & Beta Functions 
Equations are mainly divided into two types :
- Algebraic equations
- Transcendental Equations 

The Gamma and Beta functions belongs to the category of special transcendental functions and the defining terms of the improper integrals.

These functions are useful in many areas like asymptotic series, hypergeometric series, number theory and the physics in which trajectories are involved.

### Gamma Functions 
#gamma_functions
denoted by " $\Gamma x$ " , and n is defined as a convergent improper integral which depends on the parameter n, hence 
$$ \Gamma n = \int_{0}^{\infty} e^{-x}\cdot x^{n-1} \, dx  $$
It is to be noted that gamma function is a single variable function.

#### Properties of Gamma Functions :
###### Reduction or Recursion 
$$
\begin{aligned}
 \Gamma (n+1) &= \int_{0}^{\infty} e^{-x}\cdot x^{n} \, dx \\
 &= \left[\frac{x^{n} \cdot e^{-x}}{-1} \right]_{0}^{\infty} - \int \frac{n \cdot x^{n-1} \cdot e^{-x}}{-1} \, dx \\
 \; \\
 &= n \Gamma n
\end{aligned}
$$


> [!NOTE] Hence, The following can be said about the Reduction of a Gamma Function
> $$
> \begin{aligned}
> \Gamma(n+1) &= n\Gamma n\\
> \; \\
> &= n! \;\;\;\; (\because \Gamma_{1} = 1)
> \end{aligned}
$$

**Remark :** If n is positive non integer 
$$ \Gamma(n+1) = n \cdot (n-1) \cdot (n-2) \cdot \cdot \cdot \cdot \Gamma(\eta) $$
$$\text{Where $\eta$ is the last positive factor}$$
$$\text{eg : } \Gamma\left( \frac{13}{4} \right) = \frac{9}{4} \cdot \frac{5}{4} \cdot \frac{1}{4} \cdot \Gamma \frac{1}{4}$$
**NOTE :** Don't forget to multiply the last positive factor to the expression


###### Continuity
Gamma Function is continuous for $\forall \, n>0$ and discontinuous at $\forall n \in  (0, -1, -2 \dots)$ 
$$
\begin{align}
\Gamma_{1} = \int_{0}^{\infty} e^{-x}\cdot x^{0} \, dx 
\end{align}
$$
as we can see above, $\Gamma_{1}$ does not exist 
using the property of Gamma Functions $\Gamma (n+1) = n \cdot \Gamma n$, we can say argue that $\Gamma 0$ does not exist as well, hence $\Gamma (-1)$ and so on, hence using the concept of proof by induction we can say that $\Gamma n$ is discontinuous at $\forall n \in  (0, -1, -2 \dots)$  .

#### Some Important results on Gamma Functions 
$$
\begin{aligned}
\int _{0}^{1} x^{m-1} \left( \ln \frac{{1}}{x} \right)^{n-1} \, dx \\
\end{aligned}
$$$$
\text{let } x=e^{-t} \\
\; \\
\text{Hence the above equation becomes : } \\
$$$$
\begin{aligned}
&= \int _{\infty}^{0} e^{-t(m-1)} \cdot t^{n-1} \cdot (-e^{-t}) \, dt \\
&= \int _{0}^{\infty} e^{-mt} \cdot t^{n-1}  \, dt  \\
\end{aligned}
$$
let $mt = u$

$$
\begin{aligned}
&= \int _{0}^{\infty} \frac{e^{-u} \cdot u^{n-1}}{m^{n-1}} \cdot \frac{1}{m} \, du  \\
\; \\
&= \frac{\Gamma n}{m^n} \\
\end{aligned}
$$

> [!NOTE] Therefore we can say that 
> $$\int _{0}^{1} x^{m-1} \left( \ln \frac{{1}}{x} \right)^{n-1} \, dx = \frac{\Gamma n}{m^n}$$
