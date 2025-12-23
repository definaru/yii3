---
title: Built-in rules
editLink: true
lastUpdated: true
---

# Built-in rules

## Available rules

Here is a list of all available built-in rules, divided by category.

### String rules

- [StringValue][StringValue]
- [Length][Length]
- [Regex][Regex]
- [Email][Email]
- [Ip][Ip]
- [Json][Json]
- [Url][Url]

### Boolean rules

- [Boolean][Boolean]
- [IsTrue][IsTrue]

### Number rules

- [Number][Number]
- [Integer][Integer]

### Comparison rules

- [Compare][Compare]
- [Equal][Equal]
- [NotEqual][NotEqual]
- [GreaterThan][GreaterThan]
- [GreaterThanOrEqual][GreaterThanOrEqual]
- [LessThan][LessThan]
- [LessThanOrEqual][LessThanOrEqual]

### Set rules

- [In][In]
- [Subset][Subset]

### Count rules

- [AtLeast][AtLeast]
- [Count][Count]
- [OneOf][OneOf]

### General purpose rules

- [Callback][Callback]
- [Required][Required]

### Complex rules

- [Composite][Composite]
- [Each][Each]
- [Nested][Nested]
- [StopOnError][StopOnError]

## Guides

Some rules also have guides in addition to PHPDoc:

- [Callback](built-in-rules-callback.md)
- [Compare](built-in-rules-compare.md)
- [Composite](built-in-rules-composite.md)
- [Each](built-in-rules-each.md)
- [Nested](built-in-rules-nested.md)
- [Required](built-in-rules-required.md)
- [StopOnError](built-in-rules-stop-on-error.md)

## Missing rules

Can't find a rule? Feel free to submit an issue / PR, so it can be included in the package after review. Another option,
if your use case is less generic, is to search for [an extension] or [create a custom rule].
 
---
Back to [Yii Validator](/yiisoft/validator)

[an extension]: extensions.md
[create a custom rule]: creating-custom-rules.md
[StringValue]: https://github.com/yiisoft/validator/blob/master/src/Rule/StringValue.php
[Length]: https://github.com/yiisoft/validator/blob/master/src/Rule/Length.php
[Regex]: https://github.com/yiisoft/validator/blob/master/src/Rule/Regex.php
[Email]: https://github.com/yiisoft/validator/blob/master/src/Rule/Email.php
[Ip]: https://github.com/yiisoft/validator/blob/master/src/Rule/Ip.php
[Json]: https://github.com/yiisoft/validator/blob/master/src/Rule/Json.php
[Url]: https://github.com/yiisoft/validator/blob/master/src/Rule/Url.php
[Boolean]: https://github.com/yiisoft/validator/blob/master/src/Rule/Boolean.php
[IsTrue]: https://github.com/yiisoft/validator/blob/master/src/Rule/IsTrue.php
[Number]: https://github.com/yiisoft/validator/blob/master/src/Rule/Number.php
[Integer]: https://github.com/yiisoft/validator/blob/master/src/Rule/Integer.php
[Compare]: https://github.com/yiisoft/validator/blob/mastersrc/Rule/Compare.php
[Equal]: https://github.com/yiisoft/validator/blob/master/src/Rule/Equal.php
[NotEqual]: https://github.com/yiisoft/validator/blob/master/src/Rule/NotEqual.php
[GreaterThan]: https://github.com/yiisoft/validator/blob/master/src/Rule/GreaterThan.php
[GreaterThanOrEqual]: https://github.com/yiisoft/validator/blob/master/src/Rule/GreaterThanOrEqual.php
[LessThan]: https://github.com/yiisoft/validator/blob/master/src/Rule/LessThan.php
[LessThanOrEqual]: https://github.com/yiisoft/validator/blob/master/src/Rule/LessThanOrEqual.php
[In]: https://github.com/yiisoft/validator/blob/master/src/Rule/In.php
[Subset]: https://github.com/yiisoft/validator/blob/master/src/Rule/Subset.php
[AtLeast]: https://github.com/yiisoft/validator/blob/master/src/Rule/AtLeast.php
[Count]: https://github.com/yiisoft/validator/blob/master/src/Rule/Count.php
[OneOf]: https://github.com/yiisoft/validator/blob/master/src/Rule/OneOf.php
[Callback]: https://github.com/yiisoft/validator/blob/master/src/Rule/Callback.php
[Required]: https://github.com/yiisoft/validator/blob/master/src/Rule/Required.php
[Composite]: https://github.com/yiisoft/validator/blob/master/src/Rule/Composite.php
[Each]: https://github.com/yiisoft/validator/blob/master/src/Rule/Each.php
[Nested]: https://github.com/yiisoft/validator/blob/master/src/Rule/Nested.php
[StopOnError]: https://github.com/yiisoft/validator/blob/master/src/Rule/StopOnError.php