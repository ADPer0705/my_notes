# [INTEGRATION](Integration)  
### REDUCTION FORMULAS 
#reduction_integrals 

====================================================================

> [!NOTE] Therefore the required reduction formula for $\int \sin^nx \, dx$ is 
> $I_n = \frac{1}{n}[-(\sin^{n-1}x\cdot \cos x) + (n-1)I_{n-2}]$
> $\text{where } I_{n}=\int \sin^nx \, dx$

> [!NOTE] similarly, the required reduction formula for $\int \cos^nx \, dx$ is 
> $I_n = \frac{1}{n}[(\cos^{n-1}x\cdot \sin x) + (n-1)I_{n-2}] \\$
> $\text{where } I_{n}=\int \cos^nx \, dx$

====================================================================

> [!NOTE] The required reduction formula for $\int_{0}^{\frac{\pi}{2}}\sin^{nx \, dx} \& \int_{0}^{\frac{\pi}{2}}\cos^{nx \, dx}$ 
> $$I_{n} = \frac{n-1}{n}\cdot I_{n-2}$$
> where $\int_{0}^{\frac{\pi}{2}}\sin^{n}x \, dx \;\; \text{or} \;\; \int_{0}^{\frac{\pi}{2}}\cos^{n}x \, dx$
> $\; \\$
>**NOTE :** $n \in \left(0, \inf\right]$
>$\; \\$
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

====================================================================

> [!NOTE] $I_{m,n} = \int \sin^{m}x \cdot \cos^{n}x \, dx$  
> $$
> \begin{aligned}
> &= \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} + \left( \frac{n-1}{m+n} \right) \int \sin^{m}x \cdot \cos^{n-2}x \, dx \\
> &= \frac{\sin^{m+1}x \cdot \cos^{n-1}x}{m+n} + \left( \frac{n-1}{m+n} \right)\cdot I_{m,n-2}
\end{aligned}
$$

> [!NOTE] $I_{m,n} = \int_{0}^{\frac{\pi}{2}} \sin^{m}x \cdot \cos^{n}x \, dx$
> $$
> I_{m,n} = \left( \frac{n-1}{m+n} \right)\cdot I_{m,n-2}
$$

---

### GAMMA & BETA FUNCTIONS

##### GAMMA FUNCTIONS 
#gamma_functions 

$$ \Gamma n = \int_{0}^{\infty} e^{-x}\cdot x^{n-1} \, dx  $$
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
**NOTE :** Don't forget to multiply the last positive factor by itself 

====================================================================