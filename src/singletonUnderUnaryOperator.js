/**
 * Computes the closure of a unary operator, starting from a single element.
 *
 * @experimental Should handle multiple d-ary operators and an arbitrary
 * cardinality countable set in the future. An actual closure function would
 * keep track of encountered elements to stop when all elements have been
 * found. We can have multiple low-level function that enumerate candidates,
 * and a helper function that constructs a new set out of a combination of
 * those. Note that the arity of a JavaScript function can be retrieved through
 * the `length` property.
 *
 * @example
 * singletonUnderUnaryOperator( x => x + 1 , 0 ) ; // 0 1 2 3 ...
 *
 * @example
 * singletonUnderUnaryOperator( x => x * 2 , 1 ) ; // 1 2 4 8 ...
 *
 * @param {Function} operator The operator.
 * @param {Object} start The starting element.
 * @returns {Iterator} Iterator over the closure.
 */
export default function* singletonUnderUnaryOperator(operator, start) {
	yield start;

	let element = start;

	while (true) {
		element = operator(element);

		yield element;
	}
}
