import deepMerge from "booking-system-playground/utils/deep-merge";
import {module, test} from "qunit";

module("Unit | Utility | deep-merge", function () {
	test("it merges objects with primitive values", function (assert) {
		const initialObject = {a: 1, b: 2};
		const mergeObject = {b: 3, c: 4};
		const mergedResult = deepMerge(initialObject, mergeObject);
		assert.deepEqual(mergedResult, {a: 1, b: 3, c: 4});
	});

	test("it merges nested objects", function (assert) {
		const initialNestedObject = {a: {b: 1, c: 2}, d: 3};
		const mergeNestedObject = {a: {c: 3, d: 4}, e: 5};
		const mergedNestedResult = deepMerge(initialNestedObject, mergeNestedObject);
		assert.deepEqual(mergedNestedResult, {a: {b: 1, c: 3, d: 4}, d: 3, e: 5});
	});

	test("it returns source if target is not an object", function (assert) {
		const nonObjectTarget = null;
		const sourceObject = {a: 1};
		const result = deepMerge(nonObjectTarget, sourceObject);
		assert.deepEqual(result, {a: 1});
	});

	test("it returns source if source is not an object", function (assert) {
		const targetObject = {a: 1};
		const nonObjectSource = null;
		const result = deepMerge(targetObject, nonObjectSource);
		assert.deepEqual(result, null);
	});
});
