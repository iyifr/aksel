import { test, expect } from 'vitest'
import { add } from '../utils/add.js'

test('add', () => {
	expect(add(1, 2)).toBe(3)
})
