# Sample Article

This is a sample blog article with markdown and LaTeX support[^1].

## Mathematics

You can write inline math like $E = mc^2$ or display math:

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

This integral is particularly important in probability theory[^2].

## Code

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

## Lists

- Item 1
- Item 2
- Item 3

## More Math

The quadratic formula[^3] is derived by completing the square. Starting with:

$$ax^2 + bx + c = 0$$

Divide both sides by $a$:

$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0$$

<details class="inline-derivation">
<summary>⋯</summary>

Move the constant term to the right:
$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

Complete the square by adding $\left(\frac{b}{2a}\right)^2$ to both sides:
$$x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = \left(\frac{b}{2a}\right)^2 - \frac{c}{a}$$

Factor the left side:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a}$$

Simplify the right side:
$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

Take the square root of both sides:
$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

</details>

Therefore:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

## Text Formatting

You can use **bold**, *italic*, and `inline code`.

## Blockquotes

> This is a blockquote. It can contain multiple lines
> and will be styled differently from regular text.

The annotations you see on the right are footnotes[^4] that appear at the same vertical position as their references.

[^1]: Footnotes appear on the right side of the page, aligned with where they're referenced in the text.
[^2]: The Gaussian integral is fundamental to the normal distribution in statistics.
[^3]: This formula was known to ancient mathematicians but was first stated in its modern form by European mathematicians in the 16th century.
[^4]: This margin note system is inspired by Edward Tufte's design principles for displaying annotations.
