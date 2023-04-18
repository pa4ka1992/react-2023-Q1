/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    interface Assertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

declare module './dist/server/entry-server.tsx';
