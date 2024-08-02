var documenterSearchIndex = {"docs":
[{"location":"Distributions/#extra_dist","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"","category":"section"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Univariate distributions are the distributions whose variate forms are Univariate (i.e each sample is a scalar). Abstract types for univariate distributions:","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"using Distributions, GR\n\n# display figures as SVGs\nGR.inline(\"svg\")\n\n# plot probability density of continuous distributions\nfunction plotdensity(\n    (xmin, xmax),\n    dist::ContinuousUnivariateDistribution;\n    npoints=299,\n    title=\"\",\n    kwargs...,\n)\n    figure(;\n        title=title,\n        xlabel=\"x\",\n        ylabel=\"density\",\n        grid=false,\n        backgroundcolor=0, # white instead of transparent background for dark Documenter scheme\n        font=\"Helvetica_Regular\", # work around https://github.com/JuliaPlots/Plots.jl/issues/2596\n        linewidth=2.0, # thick lines\n        kwargs...,\n    )\n    return plot(range(xmin, xmax; length=npoints), Base.Fix1(pdf, dist))\nend\n\n# convenience function with automatic title\nfunction plotdensity(\n    xmin_xmax,\n    ::Type{T},\n    args=();\n    title=string(T) * \"(\" * join(args, \", \") * \")\",\n    kwargs...\n) where {T<:ContinuousUnivariateDistribution}\n    return plotdensity(xmin_xmax, T(args...); title=title, kwargs...)\nend","category":"page"},{"location":"Distributions/#Extra-Continuous-Distributions","page":"Extra Univariate Distributions","title":"Extra Continuous Distributions","text":"","category":"section"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Alpha","category":"page"},{"location":"Distributions/#ExtraDistributions.Alpha","page":"Extra Univariate Distributions","title":"ExtraDistributions.Alpha","text":"Alpha(α, β)\n\nAn Alpha distribution is defined by the following probability density function (PDF):\n\nf(x) = fracbetasqrt2pi Phi(alpha) x^2 expleft(-frac(alpha - fracbetax)^22right) quad x  0\n\nwhere:\n\nα is a location parameter\nβ is a scale parameter\n\\Phi is the cumulative distribution function (CDF) of the standard normal distribution.\n\nAlpha()        # equivalent to Alpha(1, 1)\n\nparams(d)        # Get the parameters, i.e. (α, β)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"using Distributions, ExtraDistributions\nplotdensity((0.0, 1.0), Alpha, (1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Argus","category":"page"},{"location":"Distributions/#ExtraDistributions.Argus","page":"Extra Univariate Distributions","title":"ExtraDistributions.Argus","text":"Argus(χ, c)\n\nA Argus distribution, \n\nf(x) = \n\nArgus()        # equivalent to Argus(1, 1)\n\nparams(d)        # Get the parameters, i.e. (χ, c)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Argus, (1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Benini","category":"page"},{"location":"Distributions/#ExtraDistributions.Benini","page":"Extra Univariate Distributions","title":"ExtraDistributions.Benini","text":"Benini(α, β, σ)\n\nA Benini distribution, \n\nf(x) = \n\nBenini()        # equivalent to Benini(1, 1, 1)\nBenini(α)        # equivalent to Benini(α, 1, 1)\nBenini(α, β)        # equivalent to Benini(α, β, 1)\n\nparams(d)        # Get the parameters, i.e. (α, β, σ)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Benini, (1, 1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Benktander_Type1","category":"page"},{"location":"Distributions/#ExtraDistributions.Benktander_Type1","page":"Extra Univariate Distributions","title":"ExtraDistributions.Benktander_Type1","text":"Benktander_Type1(a, b)\n\nA Benktander_Type1 distribution, \n\nf(x) = \n\nBenktander_Type1()        # equivalent to Benktander_Type1(1, 1)\nBenktander_Type1(a)        # equivalent to Benktander_Type1(a, a(a+1)/2)\n\nparams(d)        # Get the parameters, i.e. (a, b)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Benktander_Type1, (1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Benktander_Type2","category":"page"},{"location":"Distributions/#ExtraDistributions.Benktander_Type2","page":"Extra Univariate Distributions","title":"ExtraDistributions.Benktander_Type2","text":"Benktander_Type2(a, b)\n\nA Benktander_Type2 distribution, \n\nf(x) = \n\nBenktander_Type2()        # equivalent to Benktander_Type2(1, 1)\nBenktander_Type2(a)        # equivalent to Benktander_Type2(a, 1)\n\nparams(d)        # Get the parameters, i.e. (a, b)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Benktander_Type2, (1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Bhattacharjee","category":"page"},{"location":"Distributions/#ExtraDistributions.Bhattacharjee","page":"Extra Univariate Distributions","title":"ExtraDistributions.Bhattacharjee","text":"Bhattacharjee(a, b, σ)\n\nA Bhattacharjee distribution is a continuous univariate distribution where the mean follows a rectangular (uniform) distribution and the conditional distribution given the mean is normal. Specifically, if the mean θ follows a uniform distribution between a and b, and the conditional distribution of X given θ is normal with mean θ and standard deviation σ, then X follows a Bhattacharjee distribution.\n\nf(x) = frac1b - a left Phileft(fracx - asigmaright) - Phileft(fracx - bsigmaright) right\n\nBhattacharjee()        # equivalent to Bhattacharjee(0, 1, 1)\nBhattacharjee(σ)       # equivalent to Bhattacharjee(0, 1, σ)\n\nparams(d)        # Get the parameters, i.e. (a , b, σ)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Bhattacharjee, (0, 1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"BirnbaumSaunders","category":"page"},{"location":"Distributions/#ExtraDistributions.BirnbaumSaunders","page":"Extra Univariate Distributions","title":"ExtraDistributions.BirnbaumSaunders","text":"BirnbaumSaunders(μ, α, β)\n\nA BirnbaumSaunders distribution, also known as the fatigue life distribution, is used to model life data and times to failure. It is defined by three parameters: the location parameter ( \\mu ), the shape parameter ( \\alpha ), and the scale parameter ( \\beta ). The probability density function (PDF) of the Birnbaum-Saunders distribution is given by:\n\nf(x) = fracsqrtfracx - mubeta + sqrtfracbetax - mu2 alpha (x - mu) phileft( fracsqrtfracx - mubeta - sqrtfracbetax - mualpha right)\n\nBirnbaumSaunders()        # equivalent to BirnbaumSaunders(0, 1, 1)\nBirnbaumSaunders(σ)       # equivalent to BirnbaumSaunders(0, α, 1)\nBirnbaumSaunders(σ,β)       # equivalent to BirnbaumSaunders(0, α, β)\n\nparams(d)        # Get the parameters, i.e. (μ , α, β)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), BirnbaumSaunders, (0, 1, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Bradford","category":"page"},{"location":"Distributions/#ExtraDistributions.Bradford","page":"Extra Univariate Distributions","title":"ExtraDistributions.Bradford","text":"Bradford(a)\n\nAn Bradford distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nBradford()        # equivalent to Bradford(1)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Bradford, (0.5,)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Burr","category":"page"},{"location":"Distributions/#ExtraDistributions.Burr","page":"Extra Univariate Distributions","title":"ExtraDistributions.Burr","text":"Burr(c, k, λ)\n\nAn Burr distribution is defined by three parameters: c, k, and λ, where c and k are shape parameters and λ is a scale parameter.\n\nThe probability density function (PDF) of the Burr distribution is given by:\n\nf(x c k lambda) = fracc klambda left(fracxlambdaright)^c-1 left(1 + left(fracxlambdaright)^cright)^-(k+1)\n\nBurr()        # equivalent to Burr(1, 1, 1)\nBurr(c)       # equivalent to Burr(c, 1, 1)\nBurr(c, k)    # equivalent to Burr(c, k, 1)\n\nparams(d)        # Get the parameters, i.e. (c, k, λ)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Burr, (1,1,1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"CrystalBall","category":"page"},{"location":"Distributions/#ExtraDistributions.CrystalBall","page":"Extra Univariate Distributions","title":"ExtraDistributions.CrystalBall","text":"CrystalBall(α, m, x̄, σ)\n\nAn CrystalBall distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nCrystalBall(α, m)        # equivalent to CrystalBall(α, m, 0, 1)\nCrystalBall(α, m, x̄)     # equivalent to CrystalBall(α, m, x̄, 1)\n\nparams(d)        # Get the parameters, i.e. (α, m, x̄, σ)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), CrystalBall, (1, 2 ,0, 1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Dagum","category":"page"},{"location":"Distributions/#ExtraDistributions.Dagum","page":"Extra Univariate Distributions","title":"ExtraDistributions.Dagum","text":"Dagum(a, b, p)\n\nAn Dagum distribution is defined by three parameters: a, b, and p,  The probability density function (PDF) of the Dagum distribution is given by:\n\nf(x a b p) =\n\nDagum()        # equivalent to Dagum(1, 1, 1)\nDagum(a)    # equivalent to Dagum(a, 1, 1)\nDagum(a, b)    # equivalent to Dagum(a, b, 1)\n\nparams(d)        # Get the parameters, i.e. (a, b, p)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Dagum, (1,1,1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Gompertz","category":"page"},{"location":"Distributions/#ExtraDistributions.Gompertz","page":"Extra Univariate Distributions","title":"ExtraDistributions.Gompertz","text":"Gompertz(η , b)\n\nA Gompertz distribution, \n\nf(x) = \n\nGompertz()        # equivalent to Gompertz(1, 1)\nGompertz(η)        # equivalent to Gompertz(η, 1)\n\nparams(d)        # Get the parameters, i.e. (η, b)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Gompertz, (1,1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Lomax","category":"page"},{"location":"Distributions/#ExtraDistributions.Lomax","page":"Extra Univariate Distributions","title":"ExtraDistributions.Lomax","text":"Lomax(α, λ)\n\nAn Lomax distribution is defined by the following probability density function (PDF):\n\nf(x) = \n\nwhere:\n\nα is a shape parameter\nλ is a scale parameter\n\nLomax()        # equivalent to Lomax(1, 1)\nLomax(α)       # equivalent to Lomax(α, 1)\n\nparams(d)      # Get the parameters, i.e. (α, λ)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Lomax, (1,1)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Maxwell","category":"page"},{"location":"Distributions/#ExtraDistributions.Maxwell","page":"Extra Univariate Distributions","title":"ExtraDistributions.Maxwell","text":"Maxwell(a)\n\nAn Maxwell distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nMaxwell()        # equivalent to Maxwell(1)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), Maxwell, (1,)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Nakagami","category":"page"},{"location":"Distributions/#ExtraDistributions.Nakagami","page":"Extra Univariate Distributions","title":"ExtraDistributions.Nakagami","text":"Nakagami(m, Ω)\n\nAn Nakagami distribution is defined by the following probability density function (PDF):\n\nf(x) = \n\nwhere:\n\nm is a shape parameter\nΩ is a spread parameter\n\nNakagami()        # equivalent to Nakagami(0.5, 1)\nNakagami(m)        # equivalent to Nakagami(m, 1)\n\nparams(d)        # Get the parameters, i.e. (m, Ω)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((-1.0, 1.0), Nakagami, (0.5, 1.0)) # hide","category":"page"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"PERT","category":"page"},{"location":"Distributions/#ExtraDistributions.PERT","page":"Extra Univariate Distributions","title":"ExtraDistributions.PERT","text":"PERT(a, b, m)\n\nAn PERT distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nPERT()        # equivalent to PERT(0, 0.5, 1)\n\nparams(d)        # Get the parameters, i.e. (a, b, m)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"plotdensity((0.0, 1.0), PERT, (0.0, 0.5, 1.0)) # hide","category":"page"},{"location":"Distributions/#Extra-Discrete-Distributions","page":"Extra Univariate Distributions","title":"Extra Discrete Distributions","text":"","category":"section"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"BetaNegBinomial","category":"page"},{"location":"Distributions/#ExtraDistributions.BetaNegBinomial","page":"Extra Univariate Distributions","title":"ExtraDistributions.BetaNegBinomial","text":"BetaNegBinomial(r,α,β)\n\nA Beta Negative Binomial is the compound distribution of the NegativeBinomial distribution where the probability of success p is distributed according to the Beta. It has three parameters: r, the number of successes number of successes until the experiment is stopped and two shape parameters α, β\n\nP(X=k) = \n\nBetaNegBinomial()        # equivalent to BetaNegBinomial(1, 1, 1)\nBetaNegBinomial(r)       # equivalent to BetaNegBinomial(r, 1, 1)\nBetaNegBinomial(r, α)    # equivalent to BetaNegBinomial(r, α, α)\n\nparams(d)        # Get the parameters, i.e. (r , α, β)\nsuccprob(d)    # Get the number of successes, i.e. r\n\nExternal links\n\nBeta Negative Binomial distribution on Wikipedia\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Borel","category":"page"},{"location":"Distributions/#ExtraDistributions.Borel","page":"Extra Univariate Distributions","title":"ExtraDistributions.Borel","text":"Borel(a)\n\nAn Borel distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nBorel()        # equivalent to Borel(0)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Conway","category":"page"},{"location":"Distributions/#ExtraDistributions.Conway","page":"Extra Univariate Distributions","title":"ExtraDistributions.Conway","text":"Conway(λ, ν)\n\nA Conway–Maxwell–Poisson distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nConway()        # equivalent to Conway(1, 1)\nConway(λ)       # equivalent to Conway(λ, 1)\nConway(λ, ν)    # equivalent to Conway(λ, ν)\n\nparams(d)        # Get the parameters, i.e. (λ, ν)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Delaporte","category":"page"},{"location":"Distributions/#ExtraDistributions.Delaporte","page":"Extra Univariate Distributions","title":"ExtraDistributions.Delaporte","text":"Delaporte(λ,α,β)\n\nA Beta Negative Binomial is the compound distribution of the NegativeBinomial distribution where the probability of success p is distributed according to the Beta. It has three parameters: r, the number of successes number of successes until the experiment is stopped and two shape parameters α, β\n\nP(X=k) = \n\nDelaporte()        # equivalent to Delaporte(1, 1, 1)\nDelaporte(λ)       # equivalent to Delaporte(λ, 1, 1)\nDelaporte(λ, α)    # equivalent to Delaporte(r, α, α)\n\nparams(d)        # Get the parameters, i.e. (λ, α, β)\n\nExternal links\n\nBeta Negative Binomial distribution on Wikipedia\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"FlorySchulz","category":"page"},{"location":"Distributions/#ExtraDistributions.FlorySchulz","page":"Extra Univariate Distributions","title":"ExtraDistributions.FlorySchulz","text":"FlorySchulz(a)\n\nAn FlorySchulz distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nFlorySchulz()        # equivalent to FlorySchulz(0.5)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"GaussKuzmin","category":"page"},{"location":"Distributions/#ExtraDistributions.GaussKuzmin","page":"Extra Univariate Distributions","title":"ExtraDistributions.GaussKuzmin","text":"GaussKuzmin()\n\nAn GaussKuzmin distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nGaussKuzmin()        # equivalent to GaussKuzmin()\n\nparams(d)        # Get the parameters, i.e. none\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Logarithmic","category":"page"},{"location":"Distributions/#ExtraDistributions.Logarithmic","page":"Extra Univariate Distributions","title":"ExtraDistributions.Logarithmic","text":"Logarithmic(a)\n\nAn Logarithmic distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nLogarithmic()        # equivalent to Logarithmic(0.5)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Rademacher","category":"page"},{"location":"Distributions/#ExtraDistributions.Rademacher","page":"Extra Univariate Distributions","title":"ExtraDistributions.Rademacher","text":"Rademacher()\n\nA Rademacher distribution ... \n\nP(X = k) = begincases\n05  quad textfor  k = -1 \n05  quad textfor  k = +1\nendcases\n\nRademacher()    # Rademacher distribution \n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Yule","category":"page"},{"location":"Distributions/#ExtraDistributions.Yule","page":"Extra Univariate Distributions","title":"ExtraDistributions.Yule","text":"Yule(a)\n\nAn Yule distribution is defined by the following probability density function (PDF):\n\nf(x) =\n\nwhere:\n\nYule()        # equivalent to Yule(1)\n\nparams(d)        # Get the parameters, i.e. a\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Zeta","category":"page"},{"location":"Distributions/#ExtraDistributions.Zeta","page":"Extra Univariate Distributions","title":"ExtraDistributions.Zeta","text":"Zeta(s)\n\nA Zeta distribution ... \n\nP(X = k) = frac1zeta(s) frac1k^s\nendcases\n\nWhere zeta is a Riemann Function ```julia Zeta()      # equivalent to Zeta(1)\n\nparams(d)   # Get the parameters, i.e. s\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"ZIB","category":"page"},{"location":"Distributions/#ExtraDistributions.ZIB","page":"Extra Univariate Distributions","title":"ExtraDistributions.ZIB","text":"ZIB(n, θ, p)\n\nA Zero inflated Binomial distribution ... \n\nP(X = k) = \n\n```julia ZIB()       # equivalent to ZIB(1, 0.5, 0.5) ZIB(n)      # equivalent to ZIB(n, 0.5, 0.5) ZIB(n, θ)   # equivalent to ZIB(n, θ, 0.5)\n\nparams(d)   # Get the parameters, i.e. (n, θ, p)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"ZINB","category":"page"},{"location":"Distributions/#ExtraDistributions.ZINB","page":"Extra Univariate Distributions","title":"ExtraDistributions.ZINB","text":"ZIB(n, θ, p)\n\nA Zero inflated Binomial distribution ... \n\nP(X = k) = \n\n```julia ZIB()       # equivalent to ZIB(1, 0.5, 0.5) ZIB(r)      # equivalent to ZIB(r, 0.5, 0.5) ZIB(r, θ)   # equivalent to ZIB(r, θ, 0.5)\n\nparams(d)   # Get the parameters, i.e. (r, θ, p)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"ZIP","category":"page"},{"location":"Distributions/#ExtraDistributions.ZIP","page":"Extra Univariate Distributions","title":"ExtraDistributions.ZIP","text":"ZIP(λ, p)\n\nA Zero inflated Poisson distribution ... \n\nP(X = k) = \n\n```julia ZIP()      # equivalent to ZIP(1, 0.5) ZIP(λ)     # equivalent to ZIP(λ, 0.5)\n\nparams(d)   # Get the parameters, i.e. (λ, p)\n\n\n\n\n\n","category":"type"},{"location":"Distributions/","page":"Extra Univariate Distributions","title":"Extra Univariate Distributions","text":"Zipf","category":"page"},{"location":"Distributions/#ExtraDistributions.Zipf","page":"Extra Univariate Distributions","title":"ExtraDistributions.Zipf","text":"Zipf(N, s)\n\nA Zipf distribution ... \n\nP(X = k) = frac1H_Ns frac1k^s\nendcases\n\nWhere H_N s is a generalized harmonic number ```julia Zipf()      # equivalent to BetaNegBinomial(1, 1) Zipf(N)     # equivalent to BetaNegBinomial(N, 1)\n\nparams(d)   # Get the parameters, i.e. (N, s)\n\n\n\n\n\n","category":"type"},{"location":"starting/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"starting/#Installation","page":"Getting Started","title":"Installation","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The ExtraDistributions package is available through the Julia package system by running Pkg.add(\"ExtraDistributions\"). Throughout, we assume that you have installed the package.","category":"page"},{"location":"starting/#Starting-With-a-Poisson-Zero-infalted-Distribution-ZIP","page":"Getting Started","title":"Starting With a Poisson Zero-infalted Distribution ZIP","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"We start by drawing 100 observations from a Poison zero infalted with parameters λ = 5.0 and p = 0.2 random variable.","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The first step is to set up the environment:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> using Random, Distributions, ExtraDistributions\n\njulia> Random.seed!(2024) # Setting the seed","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"Then, we create a Poison zero infalted distribution d and obtain samples using rand:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> d = ZIP(5.0, 0.2)\nZIP{Float64}(λ=5.0, p=0.2)","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The object d represents a probability distribution, in our case the Poison zero infalted distribution. One can query its properties such as the mean:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> mean(d)\n4.0","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"We can also draw samples from d with rand.","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> samples = rand(d, 100)\n100-element Vector{Int64}:\n 0\n 3\n 6\n 4\n 5\n ⋮","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"You can easily obtain the pdf, cdf, quantile, and many other functions for a distribution. For instance, the median (50th percentile) and the 95th percentile for the Poisson zero inflated distribution are given by:","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> quantile.(ZIP(), [0.5, 0.95])\n2-element Vector{Int64}:\n 0\n 2","category":"page"},{"location":"starting/#Using-Other-Distributions","page":"Getting Started","title":"Using Other Distributions","text":"","category":"section"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"The package contains a large number of discrete and continuous distributions in addition to those implemented in Distributions.jl.","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"For instance, you can define the following distributions (among many others):","category":"page"},{"location":"starting/","page":"Getting Started","title":"Getting Started","text":"julia> BetaNegBinomial(r, α, β) # Discrete univariate\njulia> Lomax(α, λ)              # Continuous univariate\njulia> ZINB(r, θ, p)            # Discrete univariate\njulia> Gompertz(η, b)           # Continuous univariate","category":"page"},{"location":"#Welcome-to-ExtraDist","page":"Welcome to ExtraDist","title":"Welcome to ExtraDist","text":"","category":"section"},{"location":"","page":"Welcome to ExtraDist","title":"Welcome to ExtraDist","text":"The ExtraDistributions package is a comprehensive extension of Distributions.jl, designed to expand its functionality by incorporating both discrete and continuous probability distributions not available in the base package. ExtraDist aims to enhance the breadth of statistical tools available for data analysis, simulation, and probabilistic modeling.","category":"page"},{"location":"","page":"Welcome to ExtraDist","title":"Welcome to ExtraDist","text":"With ExtraDistributions, you can:","category":"page"},{"location":"","page":"Welcome to ExtraDist","title":"Welcome to ExtraDist","text":"Sample from distributions: Draw random samples from a variety of distributions.\nCalculate moments and other properties: Obtain moments (such as mean, variance, skewness, and kurtosis), entropy, and other statistical properties.\nEvaluate probability density/mass functions: Compute the probability density functions (pdf) and their logarithms (logpdf).\nUtilize moment-generating, quantile, and characteristic functions: Access moment-generating functions, quantile functions, and characteristic functions for in-depth statistical analysis.","category":"page"},{"location":"","page":"Welcome to ExtraDist","title":"Welcome to ExtraDist","text":"In the future, we plan to implement maximum likelihood estimators and potentially introduce additional multivariate distributions to further enrich the package.","category":"page"},{"location":"Compatibility/#Compatibility","page":"Compatibility","title":"Compatibility","text":"","category":"section"},{"location":"Compatibility/#Compatibility-with-Distributions.jl","page":"Compatibility","title":"Compatibility with Distributions.jl","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"The ExtraDistributions package is fully compatible with the Distributions.jl package. As an extension of Distributions.jl, ExtraDistributions supports all the core functionalities provided by Distributions.jl, including but not limited to:","category":"page"},{"location":"Compatibility/#Truncated-Distributions","page":"Compatibility","title":"Truncated Distributions","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Generate and work with truncated versions of existing distributions.","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"julia> d = Alpha()\nAlpha{Float64}(α=1.0, β=1.0)\njulia> d_truncated = Truncated(d, 0.0, 1.0)\nTruncated(Alpha{Float64}(α=1.0, β=1.0); lower=0.0, upper=1.0)","category":"page"},{"location":"Compatibility/#Censored-Distributions","page":"Compatibility","title":"Censored Distributions","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Handle censored data and perform analyses accordingly.","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"julia> d1 = Gompertz()\nGompertz{Float64}(η=1.0, b=1.0)\nd_censored = censored(d1, 1.5, 10)\nCensored(Gompertz{Float64}(η=1.0, b=1.0); lower=1.5, upper=10.0)","category":"page"},{"location":"Compatibility/#Mixture-Distributions","page":"Compatibility","title":"Mixture Distributions","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Create and analyze mixtures of different probability distributions.","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"julia> d_mixture = MixtureModel(Maxwell, [2.0, 1.0, 5.5], [0.2, 0.5, 0.3])\nMixtureModel{Maxwell}(K = 3)\ncomponents[1] (prior = 0.2000): Maxwell{Float64}(a=2.0)\ncomponents[2] (prior = 0.5000): Maxwell{Float64}(a=1.0)\ncomponents[3] (prior = 0.3000): Maxwell{Float64}(a=5.5)","category":"page"},{"location":"Compatibility/#Order-Statistics","page":"Compatibility","title":"Order Statistics","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Compute and work with order statistics.","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"julia> OrderStatistic(Burr(), 10, 1)\nOrderStatistic{Burr{Float64}, Continuous}(\ndist: Burr{Float64}(c=1.0, k=1.0, λ=1.0)\nn: 10\nrank: 1\n)\n\njulia> OrderStatistic(Logarithmic(), 10, 5)\nOrderStatistic{Logarithmic{Float64}, Discrete}\n(dist: Logarithmic{Float64}(a=0.5) \nn: 10 \nrank: 5\n)","category":"page"},{"location":"Compatibility/#Integration-with-Other-Packages","page":"Compatibility","title":"Integration with Other Packages","text":"","category":"section"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Because of its compatibility with Distributions.jl, ExtraDistributions seamlessly integrates with other Julia packages that also build on Distributions.jl. This includes:","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"Turing.jl: For probabilistic programming and Bayesian inference.\nHypothesisTests.jl: For hypothesis testing and statistical testing.\nCopulas.jl: For copula-based modeling and simulations.","category":"page"},{"location":"Compatibility/","page":"Compatibility","title":"Compatibility","text":"This broad compatibility ensures that you can use ExtraDistributions in a wide range of statistical applications, from advanced simulations to Bayesian analysis and hypothesis testing.","category":"page"}]
}