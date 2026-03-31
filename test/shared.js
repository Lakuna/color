import { ok, strictEqual } from "node:assert/strict";

export const approximatelyEqual = (actual, expected, delta) => {
	if (actual === expected) {
		return;
	}

	strictEqual(typeof actual, "number");
	strictEqual(typeof expected, "number");

	ok(Math.abs(actual - expected) < delta);
};

export const approximatelyEqualIterable = (actual, expected, delta) => {
	if (actual === expected) {
		return;
	}

	strictEqual(typeof actual, "object");
	strictEqual(typeof expected, "object");

	ok(Symbol.iterator in actual);
	ok(Symbol.iterator in expected);

	strictEqual(actual.length, expected.length);

	for (let i = 0; i < actual.length; i++) {
		approximatelyEqual(actual[i], expected[i], delta);
	}
};
