
import React from 'react'
import {
  render,
  cleanup
} from 'react-testing-library'
import 'jest-dom/extend-expect'

import BasicErrorBoundary from '../'

afterEach(cleanup)

test('should be defined', () => {
  expect(BasicErrorBoundary).toBeDefined()
})

test('should provide fallback for error', () => {
  const fallbackFn = jest.fn()
  const onErrorFn = jest.fn()

  const Fallback = () => {
    fallbackFn()
    return null
  }

  const BreakingComponent = () => {
    throw new Error('error')
    return null // eslint-disable-line
  }

  render(<BasicErrorBoundary fallback={Fallback} onError={onErrorFn}>
    <BreakingComponent />
  </BasicErrorBoundary>)

  expect(fallbackFn).toBeCalled()
  expect(onErrorFn).toBeCalled()
})
